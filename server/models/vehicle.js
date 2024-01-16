// Vehicle.js \models
const { models } = require("mongoose");
const Vehicle = require("../db/schemas/vehicle");

class VehicleModel {
    static getVehicleByLicenseNumber(licenseNumber) {
        return Vehicle.findOne({ licenseNumber });
    }

    static async getVehicleOwnerByLicenseNumber(licenseNumber) {
        const vehicle = await Vehicle.findOne({licenseNumber})
            .populate("owner")
            .exec()
        return vehicle.owner;
    }
}

module.exports = VehicleModel;
