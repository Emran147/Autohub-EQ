
// vehicle.js/Schema
const { Schema, model } = require("mongoose");
const User = require("./user");

const vehicleSchema = new Schema({
    licenseNumber: {type: String, required: true},
    forsale: {type: Boolean, required: true, default: false},
    shareDetails: {type: Boolean, required: true, default: false},
    manufacturer: {type: String},
    year: {type: Number},
    Node: {type: String},
    Owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const Vehicle = model("vehicle", vehicleSchema);
module.exports = Vehicle;