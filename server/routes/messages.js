// messages.js \routes
const { Router } = require("express");
const MessagesController = require("../controllers/messages")
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/", MessagesController.getMessagesByLanguage);
router.post("/send", MessagesController.sendMessage)

module.exports = router;