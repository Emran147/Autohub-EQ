// User.js/schemas

const { Schema, model } = require("mongoose");
const Vehicle = require("./vehicle");

const userSchema = new Schema({
    phoneNumber: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    hashedPassword: {type: String, required: true},
    language: {type: String, required: true, default: "english"},
    fullName: {type: String, required: true},
    lastNotificationView: {type: Date, required: true, default: new Date()},
    settings: {type: Schema.Types.ObjectId, ref: "Settings"},
    vehicles: [{type: Schema.Types.ObjectId, ref: "Vehicle"}],
    lastLocation: {type: Object},
    blocked: [{type: Schema.Types.ObjectId, ref: "User"}],
    admin: {type: Boolean, default: false}
});

const User = model("User", userSchema);
module.exports = User;