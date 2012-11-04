package solidys.sf.comet

import net.liftweb._
import http._
import actor._
import util._
import Helpers._
import common._
import net.liftweb.common._
import net.liftweb.http.{S,Templates}
import net.liftweb.http.SHtml
import net.liftweb.http.SHtml._
import net.liftweb.util._
import net.liftweb.util.Helpers._
import net.liftweb.json._
import net.liftweb.json.Serialization._
import net.liftweb.http.js._
import net.liftweb.http.js.JsCmds._
import net.liftweb.http.js.jquery.JqJsCmds._
import scala.xml.{NodeSeq,Text}
import net.liftweb.http.js.JE.JsRaw
import java.util.Date

case class FighterState(
  id:String,
  name:String,
  asof:BigInt,
  x:BigInt,
  y:BigInt,
  currentAction:String,
  currentAction_startTime:BigInt,
  override_animation: String,
  override_startTime: BigInt,
  crouching:Boolean,
  jumping:Boolean
) {
  def jsCmd = JsRaw("receiveUpdate('"+id+"','"+name+"',"+asof+","+x+","+y+",'"+currentAction+"',"+currentAction_startTime+",'"+override_animation+"',"+override_startTime+","+crouching+","+jumping+");") & Noop

  //def jsCmd =  JsCmds.Run("updateFighter("+id+","+asof+","+x+","+y+","+currentAction+","+currentAction_startTime+","+override_animation+","+override_startTime+","+crouching+","+jumping+")")

  //def jsCmd = JsRaw("console.log('RECV:"+currentAction+":"+override_animation+"');") & Noop

  //def jsCmd =  JsCmds.Run("console.log('UPDATE:["+id+","+asof+","+x+","+y+","+currentAction+","+currentAction_startTime+","+override_animation+","+override_startTime+","+crouching+","+jumping+"]')")
}

object FighterProxyServer extends LiftActor with ListenerManager {

  private var states: List[FighterState] = Nil

  def createUpdate = states

  override def lowPriority = {
    case s: FighterState => {
      val now = new Date().getTime();
      // lose everything 2 seconds and older
      states = s :: states.filter(_.asof > (now-2000));
      updateListeners()
    }
  }
}