const { Router } = require("express");
const SettingsController = require("../controllers/SettingsController"); 

const router = Router();

router.get("/", SettingsController.getSettingsByUserId);
router.post("/", SettingsController.updeatSettingsByUserId);

module.exports = router;
