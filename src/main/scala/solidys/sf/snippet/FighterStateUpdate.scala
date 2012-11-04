package solidys.sf.snippet

import scala.xml.{NodeSeq, Text}
import net.liftweb.util._
import net.liftweb.common._
import java.util.Date
import Helpers._
import net.liftweb.http.js.JsCmds
import net.liftweb.http.js.JsCmds._

import solidys.sf.comet._
import net.liftweb.http.SHtml
import net.liftweb.http.js.JE.JsRaw
import net.liftweb.json.JsonAST.{JArray, JValue}
import net.liftweb.http.js._
import net.liftweb.http.js.JsCmds.Alert
import net.liftweb.json.JsonAST._

/**
 * Copyright 2012 Solidys Ltd.
 * User: jhajduk
 * Date: 12-11-03
 * Time: 5:23 PM
 */
class fighterstateupdate {

  def processUpdate(value:JValue):JsCmd = {

    value match {
      case JArray(List(JString(id),JString(name), JInt(asof), JInt(x), JInt(y), JString(currentAction), JInt(currentAction_startTime), JString(override_animation), JInt(override_startTime), JBool(crouching), JBool(jumping))) => {
        FighterProxyServer ! FighterState(id,name,asof,x,y,currentAction,currentAction_startTime,override_animation,override_startTime,false,false)
        JsRaw("console.log('SEND:"+currentAction+":"+override_animation+"');") & Noop
      }

      case JArray(List(JString(id),JString(name), JInt(asof), JInt(x), JInt(y), JString(currentAction), JInt(currentAction_startTime), JNull, JNull, JBool(crouching), JBool(jumping))) => {
        FighterProxyServer ! FighterState(id,name,asof,x,y,currentAction,currentAction_startTime,"",0,false,false)
        JsRaw("console.log('SEND:"+currentAction+":_');") & Noop
      }

      case _ => {
        JsRaw("console.log('ERR:"+value.toString+"');") & Noop
      }
    }
  }

  def send = <script>function sendUpdate(id,name,asof,x,y,currentAction,currentAction_startTime,override_animation,override_startTime,crouching,jumping){{
    var cur_state = [id,name,asof,x,y,currentAction,currentAction_startTime,override_animation,override_startTime,jumping,crouching]
    // don't send idle cause it will happen naturally?
    if(currentAction != "ryu_idle") {{
      console.log("SENDSTATE: "+cur_state);
      {SHtml.jsonCall(JsRaw("cur_state"),processUpdate(_))}
    }}
}}

    </script>

  def recv = <script>function receiveUpdate(id,name,asof,x,y,currentAction,currentAction_startTime,override_animation,override_startTime,crouching,jumping){{
    console.log("RECV:"+String([id,currentAction,override_animation]));

    var fighter = register_fighter(id)

    if(fighter)
     fighter.set_state(id,name,asof,x,y,currentAction,currentAction_startTime,override_animation,override_startTime,crouching,jumping)
    }}
  </script>


  def gettime = <script>

var cur_offset = -1
var last_time_sync = 0;
var last_server_offsets = [];
syncTime();

setInterval(syncTime,2000);

function getOffset() {{

    var now = new Date().getTime();

    // todo periodically update it
    if(now - last_time_sync > 2000) {{
      var sum = 0
      for(var i = 0; last_server_offsets.length > i; i++)
      sum += last_server_offsets[i]
      var calc_result = sum/last_server_offsets.length
      cur_offset = calc_result;
      console.log("avg_offset:"+calc_result);
      last_time_sync = now;
    }}

    return parseInt(cur_offset, 10);
}}

function getTime() {{
    return new Date().getTime();
}}
  </script>
}
