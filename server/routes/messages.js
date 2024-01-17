const { Router } = require("express");
const MessagesController = require("../controllers/messages")
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/:language", MessagesController.getMessagesByLanguage);
router.post("/send", MessagesController.sendMessage)

module.exports = router;