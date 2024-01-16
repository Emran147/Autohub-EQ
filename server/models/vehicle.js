// Vehicle.js \models
const { models } = require("mongoose");
const Vehicle = require("../db/schemas/vehicle");

class VehicleModel {
    static getVehicleByLicenseNumber(licenseNumber) {
        return Vehicle.findOne({ licenseNumber });
    }
}

module.exports = VehicleModel;
