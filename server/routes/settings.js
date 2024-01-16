const { Router } = require("express");
const SettingsController = require("../controllers/SettingsController"); 

const router = Router();

router.get("/:userId", SettingsController.getSettingsByUserId);

module.exports = router;
