const AbstractManager = require("./AbstractManager")

class PoiManager extends AbstractManager {
  constructor() {
    super({ table: "poi" })
  }

  insert(poi) {
    return this.database.query(
      `insert into ${this.table} (poi_name, poi_type, poi_coordx, poi_coordy, poi_desc) values ( ?, ?, ?, ?, ?)`,
      [poi.poi_name, poi.poi_type, poi.poi_coordx, poi.poi_coordy, poi.poi_desc]
    )
  }

  update(poi) {
    return this.database.query(
      `update ${this.table} set poi_name = ?, poi_type = ?, poi_coordx = ?, poi_coordy = ?, poi_desc = ?`,
      [poi.poi_name, poi.poi_type, poi.poi_coordx, poi.poi_coordy, poi.poi_desc]
    )
  }
}

module.exports = PoiManager
