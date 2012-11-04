package solidys.sf.snippet

import net.liftweb.http._
import net.liftweb.http.rest._
import java.util.Date
import xml.Text
import net.liftweb.json.JsonAST.JString

/**
 * Copyright 2012 Solidys Ltd.
 * User: jhajduk
 * Date: 12-11-03
 * Time: 10:37 PM
 */
object TimeSync extends RestHelper {
  serve {
    case Req("time" :: _, _, GetRequest) =>PlainTextResponse((new Date().getTime()).toString());
  }
}
