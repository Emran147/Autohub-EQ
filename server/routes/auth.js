const { Router } = require("express");
const AuthController = require("../controllers/auth");

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/test", AuthController.test);

module.exports = router;