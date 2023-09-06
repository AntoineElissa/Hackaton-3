require("dotenv").config()

const mysql = require("mysql2/promise")

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  )
})

// declare and fill models: that's where you should register your own managers

const models = {}

const CoursManager = require("./CoursManager")
const HandicapManager = require("./HandicapManager")
const SkillsManager = require("./SkillsManager")
const PoiManager = require("./PoiManager")
const UsersManager = require("./UsersManager")

models.item = new ItemManager()
models.item.setDatabase(pool)

models.cours = new CoursManager()
models.cours.setDatabase(pool)

models.handicap = new HandicapManager()
models.handicap.setDatabase(pool)

models.poi = new PoiManager()
models.poi.setDatabase(pool)

models.skills = new SkillsManager()
models.skills.setDatabase(pool)

models.users = new UsersManager()
models.users.setDatabase(pool)


// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    )
  },
}

module.exports = new Proxy(models, handler)
