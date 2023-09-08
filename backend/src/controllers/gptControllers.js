const models = require("../models")

const addConversation = (req, data, res) => {
  models.gpt.insert(req, data).catch((err) => {
    console.error(err)
    // res.sendStatus(500)
  })
}

module.exports = {
  addConversation,
}
