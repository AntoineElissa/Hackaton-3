const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  login(users) {
    return this.database.query(
      `select * from ${this.table} where user_name = ? and user_pwd = ?`,
      [users.userName, users.password]
    )
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (user_name, user_email, user_pwd) values ( ?, ?, ? )`,
      [users.name, users.mail, users.pwd]
    )
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set user_name = ?, user_age = ?, user_coordx = ?, user_coordy = ?, user_email = ?, user_pwd = ?`,
      [
        users.user_name,
        users.user_age,
        users.user_coordx,
        users.user_coordy,
        users.user_email,
        users.user_pwd,
      ]
    )
  }
}
module.exports = UsersManager
