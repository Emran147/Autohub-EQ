const SettingsModel = require("../models/SettingsModel");

class SettingsController {
    static async getSettingsByUserId(req, res) {
        const { userId } = req.params;
        try {
            const settings = await SettingsModel.getSettingsByUserId(userId);
            res.json(settings);
        } catch (error) {
            console.error("Error fetching settings:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = SettingsController;
