const SettingsModel = require("../models/settings");

class SettingsController {
    static async getSettingsByUserId(req, res) {
        const userId = req.userId;
        try {
            const settings = await SettingsModel.getSettingsByUserId(userId);
            res.json(settings);
        } catch (error) {
            console.error("Error fetching settings:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async updeatSettingsByUserId(req, res) {
        const  userId  = req.userId;
        const updatedSettings = req.body;
        try {
            const settings = await SettingsModel.updateSettingsByUserId(userId, updatedSettings);
            res.json(settings);
        } catch (error) {
            console.error("Error updating settings:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = SettingsController;
