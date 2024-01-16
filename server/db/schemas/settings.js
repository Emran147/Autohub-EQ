const { Schema, model } = require("mongoose");

const settingsSchema = new Schema({
    allowSMSNotifications: {type: Boolean, required: true, default: false},
    allowWhatsappNotifications: {type: Boolean, required: true, default: true},
    allowEmailNotifications: {type: Boolean, required: true, default: true},
    shareContacts: {type: Boolean, required: true, default: false},
    owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const Settings = model("Setting", settingsSchema);
module.exports = Settings;