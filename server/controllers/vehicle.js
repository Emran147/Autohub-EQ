const VehicleModel = require("../models/vehicle");

class VehicleController {
    static async getVehicleByLicenseNumber(req, res) {
        const { licenseNumber } = req.params;
        const vehicle = await VehicleModel.getVehicleByLicenseNumber(licenseNumber);
        res.send(vehicle);
    }
}

module.exports = VehicleController