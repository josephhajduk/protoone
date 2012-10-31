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
 * Time: 9:32 PM
 */

// represents a raw art asset
class Asset extends MongoRecord[Asset] with MongoId[Asset] {
  def meta = Asset

  object description

  // shit like time of day or other game state stuff,  arbitrary parameters used to select certain assets over others
  object parameters

  // grid fs id
  object source

}
object Asset extends Asset with MongoMetaRecord[Asset]