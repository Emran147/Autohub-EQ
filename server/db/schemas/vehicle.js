
// vehicle.js/Schema
const { Schema, model } = require("mongoose");
const User = require("./user");

const vehicleSchema = new Schema({
    licenseNumber: {type: String, required: true},
    forsale: {type: Boolean, required: true, default: false},
    shareDetails: {type: Boolean, required: true, default: false},
    manufacturer: {type: String},
    model: {type: String},
    year: {type: Number},
    note: {type: String},
    owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const Vehicle = model("vehicle", vehicleSchema);
module.exports = Vehicle;