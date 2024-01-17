const { Router } = require("express");
const UserController = require("../controllers/user");
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();

router.use(authorizationMiddleWare);

router.get("/emailAndPhone", UserController.getUserEmailAndPhoneNumber);
router.patch("/email", UserController.updateEmail);
router.patch("/phone", UserController.updatePhone);

module.exports = router;
