package solidys.lib.art

import net.liftweb.mongodb._
import net.liftweb.mongodb.record._
import net.liftweb.mongodb.record.field._
import net.liftweb.record.field._
import net.liftweb.common._

/**
 * Copyright 2012 Solidys Ltd.
 * User: jhajduk
 * Date: 12-10-27
 * Time: 9:47 PM
 */

class Tile extends MongoRecord[Tile] with MongoId[Tile] {
  def meta = Tile

  // assets reference
  object assets
  // def selectAsset will be a function that chooses the best asset based on asset parameters and game state

  // note all of these masks will be super imposed for actual gameplay.
  // i.e.
  //  passableMasks will be merged taking highest value
  //  occlusion masks will be merged adding values
  //  height mask will be merged based on z order

  // where can the player walk (gray scale mask,  black is no walk,  gray is difficult to walk, white is easy walk(
  object passableMask

  // can the player see through this tile (gray scale mask)
  object occlusionMask

  // gray scale mask showing how much to raise the player depending on where they are standing
  object heightMask

}
object Tile extends Tile with MongoMetaRecord[Tile]