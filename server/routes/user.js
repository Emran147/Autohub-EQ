const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();
router.get("/personal-details", UserController.getUserEmailAndPhoneNumber);
router.patch("/email", UserController.updateEmail);

module.exports = router;
