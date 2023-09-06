const AbstractManager = require("./AbstractManager")

class HandicapsManager extends AbstractManager {
  constructor() {
    super({ table: "handicap" })
  }

  inster(handicap) {
    return this.database.query(
      `insert into ${this.table} (handicap_name) values (?)`,
      [handicap.handicap_name]
    )
  }

  update(handicap) {
    return this.database.query(`update ${this.table} set handicap_name = ?`, [
      handicap.handicap_name,
    ])
  }
}

module.exports = HandicapsManager
