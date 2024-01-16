const { Router } = require("express");
const UserController = require("../controllers/UserController");
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();

router.use(authorizationMiddleWare);
router.get("/personal-details", UserController.getUserEmailAndPhoneNumber);
router.patch("/email", UserController.updateEmail);

module.exports = router;
