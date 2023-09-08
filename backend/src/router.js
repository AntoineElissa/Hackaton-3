const express = require("express")

const router = express.Router()

const usersControllers = require("./controllers/UsersControllers")
const handicapControllers = require("./controllers/HandicapControllers")
const skillsControllers = require("./controllers/SkillsControllers")
const coursControllers = require("./controllers/CoursControllers")
const poiControllers = require("./controllers/PoiControllers")

// const gptControllers = require("./controllers/gptControllers")
// const picturesControllers = require("./controllers/picturesControllers")

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
router.post("/register", usersControllers.add)
router.put("/users/:id", usersControllers.edit)
router.delete("/users/:id", usersControllers.destroy)

router.get("/handicap", handicapControllers.browse)
router.get("/handicap/:id", handicapControllers.read)
router.post("/handicap", handicapControllers.add)
router.put("/handicap/:id", handicapControllers.edit)
router.delete("/handicap/:id", handicapControllers.destroy)

router.post("/openAPI", async (req, res) => {
  // console.log(" requete entrante : ", req.body.message)
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 100,
    }),
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    )
    const data = await response.json()
    // console.log("req ", req.body.message)
    // console.log("data: ", data.choices[0].message.content)
    // const dataBack = data.choices[0].message.content
    // console.log("data", data)
    if (
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      typeof data.choices[0].message.content === "string"
    ) {
      // const dataBack = data.choices[0].message.content
      // console.log("data: ", dataBack)
      // gptControllers.addConversation(req, dataBack)
    } else {
      console.error("Les données de réponse ne sont pas valides.")
      // Gérer les données de réponse incorrectes ici
    }

    res.send(data)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
