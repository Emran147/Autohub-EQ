
// settings.js/models
const Setting = require("../db/schemas/settings"); 

class SettingsModel {
    static getSettingsByUserId(userId) {
        console.log(userId)
        return Setting.findOne({owner: userId});
    }

    static updateSettingsByUserId(userId, updatedSettings) {
      return  Setting.findOneAndUpdate({owner: userId}, { $set: {...updatedSettings }})        
    }
}

module.exports = SettingsModel;
