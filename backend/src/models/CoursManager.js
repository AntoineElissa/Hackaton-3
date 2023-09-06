const AbstractManager = require("./AbstractManager")

class CoursManager extends AbstractManager {
  constructor() {
    super({ table: "cours" })
  }

  insert(cours) {
    return this.database.query(
      `insert into ${this.table} (cours_name, cours_contenu, cours_link) values (?, ?, ?)`,
      [cours.cours_name, cours.cours_contenu, cours.cours_link]
    )
  }

  update(cours) {
    return this.database.query(
      `update ${this.table} set cours_name = ?, cours_contenu = ?, cours_link`,

      [cours.cours_name, cours.cours_contenu, cours.cours_link]
    )
  }
}

module.exports = CoursManager
