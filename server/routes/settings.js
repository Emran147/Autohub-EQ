const { Router } = require("express");
const SettingsController = require("../controllers/settings"); 
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/", SettingsController.getSettingsByUserId);
router.post("/", SettingsController.updeatSettingsByUserId);

module.exports = router;
