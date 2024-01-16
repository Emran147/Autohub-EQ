const { Schema, model } = require("mongoose");
const User = require("./user");

const vehicleApprovalSchema = new Schema({
    licenseNumber: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    userIDNumber: {type: String, required: true}
})

const VehicleApproval = model("vehicleApproval", vehicleApprovalSchema);
module.exports = VehicleApproval;