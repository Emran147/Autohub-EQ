
const { Schema, model } = require("mongoose");
require("./user");

const vehicleSchema = new Schema({
    licenseNumber: {type: String, required: true, unique: true},
    forsale: {type: Boolean, required: true, default: false},
    shareDetails: {type: Boolean, required: true, default: false},
    manufacturer: {type: String},
    model: {type: String},
    year: {type: Number},
    note: {type: String},
    owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const Vehicle = model("Vehicle", vehicleSchema);
module.exports = Vehicle;