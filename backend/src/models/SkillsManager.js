const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
    constructor() {
      super({ table: "skills" })
    }

inster(skills) {
    return this.database.query(
        `insert into ${this.table} (skills_name) values (?)`,
        [
            skills.skills_name,
        ]
    )
}

update(skills) {
    return this.database.query(
        `update ${this.table} set skills_name = ?`,
        [
            skills.skills_name,
        ]

    )
}
}