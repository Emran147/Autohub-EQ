const { Router } = require("express");
const SettingsController = require("../controllers/SettingsController"); 
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/", SettingsController.getSettingsByUserId);
router.post("/", SettingsController.updeatSettingsByUserId);

module.exports = router;
