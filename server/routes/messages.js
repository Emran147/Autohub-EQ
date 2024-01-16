// messages.js \routes
const { Router } = require("express");
const MessagesController = require("../controllers/messages")

const router = Router();

router.get("/:language", MessagesController.getMessagesByLanguage);
router.post("/send", MessagesController.sendMessage)

module.exports = router;