const express = require("express")

const router = express.Router()

const usersControllers = require("./controllers/UsersControllers")
const handicapControllers = require("./controllers/HandicapControllers")
const skillsControllers = require("./controllers/SkillsControllers")
const coursControllers = require("./controllers/CoursControllers")
const poiControllers = require("./controllers/PoiControllers")

router.get("/cours", coursControllers.browse)
router.get("/cours/:id", coursControllers.read)
router.post("/cours", coursControllers.add)
router.put("/cours/:id", coursControllers.edit)
router.delete("/cours/:id", coursControllers.destroy)

router.get("/poi", poiControllers.browse)
router.get("/poi/:id", poiControllers.read)
router.post("/poi", poiControllers.add)
router.put("/poi/:id", poiControllers.edit)
router.delete("/poi/:id", poiControllers.destroy)

router.get("/skills", skillsControllers.browse)
router.get("/skills/:id", skillsControllers.read)
router.put("/skills/:id", skillsControllers.edit)
router.post("/skills", skillsControllers.add)
router.delete("/skills/:id", skillsControllers.destroy)

router.get("/users", usersControllers.browse)
router.get("/users/:id", usersControllers.read)
router.post("/users", usersControllers.add)
router.put("/users/:id", usersControllers.edit)
router.delete("/users/:id", usersControllers.destroy)

router.get("/handicap", handicapControllers.browse)
router.get("/handicap/:id", handicapControllers.read)
router.post("/handicap", handicapControllers.add)
router.put("/handicap/:id", handicapControllers.edit)
router.delete("/handicap/:id", handicapControllers.destroy)

module.exports = router
