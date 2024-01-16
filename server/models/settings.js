

const Setting = require("../db/schemas/settings"); 

class SettingsModel {
    static getSettingsByUserId(userId) {
        return Setting.findOne({owner: userId });
    }

    static updateSettingsByUserId(userId, updatedSettings) {
      return  Setting.findOneAndUpdate({owner: userId}, { $set: {...updatedSettings }})        
}
}
module.exports = SettingsModel;
