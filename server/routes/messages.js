// messages.js \routes
const { Router } = require("express");
const MessagesController = require("../controllers/MessagesController")
const router = Router();

router.get("/:language", MessagesController.getMessagesByLanguage);


module.exports = router;