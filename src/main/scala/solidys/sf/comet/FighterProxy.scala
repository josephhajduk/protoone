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

/**
 * Copyright 2012 Solidys Ltd.
 * User: jhajduk
 * Date: 12-11-03
 * Time: 4:39 PM
 */

class FighterProxy extends CometActor with CometListener {
  var states: List[FighterState] = Nil

  // we don't care what happened before our existance
  var lastSend: BigInt = new Date().getTime();

  override def devMode = true
  override def registerWith = FighterProxyServer

  override def lowPriority = {
    case s: List[FighterState] => {

      states = s.filter( _.asof > lastSend);
      lastSend = new Date().getTime();
      reRender()
    }
  }

  def render = states.map(_.jsCmd).foldLeft(Noop)(_ & _)
}