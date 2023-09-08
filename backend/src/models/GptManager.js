const AbstractManager = require("./AbstractManager")

class GptManager extends AbstractManager {
  constructor() {
    super({ table: "chat" })
  }
  // console.log(id)
  // console.log(message)
  // console.log(data)
  // console.log(leMessage)

  // insert(req, data) {
  // const { id, message } = req.body
  // const us erId = parseInt(id, 10)
// console.log(id)
// console.log(message)
// console.log(data)
// console.log(leMessage)
// return this.database.query(
//   `INSERT INTO ${this.table} (user_id, message_emis, message_recu) VALUES (1,"TEST","TEST2")`
// )
//   [
//     (userId, message, data)
//   ]
// }

  update(cours) {
    return this.database.query(
      `update ${this.table} set cours_name = ?, cours_contenu = ?, cours_link`,

      [cours.cours_name, cours.cours_contenu, cours.cours_link]
    )
  }
}

module.exports = GptManager
