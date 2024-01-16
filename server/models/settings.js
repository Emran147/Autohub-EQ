const Setting = require("../db/schemas/setting"); 

class SettingsModel {
    static getSettingsByUserId(userId) {
        return Setting.findOne({ userId });
    }
}

module.exports = SettingsModel;
