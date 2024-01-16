const { Router } = require("express");
const SettingsController = require("../controllers/SettingsController"); 
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/:userId", SettingsController.getSettingsByUserId);

module.exports = router;
