const Vehicle = require("../db/schemas/vehicle");
const UserModel = require("./user")

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

    static getVehiclesByUserId(userId) { 
        return  Vehicle.find({ owner: userId });
    } 

    static updateVehicleDataById(vehicleId, data) {
        return Vehicle.findByIdAndUpdate( vehicleId,{ $set: data }, {new: true});

    }

    static updateVehicleForSaleById(vehicleId, forsale) {
        return VehicleModel.updateVehicleDataById(vehicleId, {forsale});
    }

    static updateVehicleShareDetailsById(vehicleId, shareDetails) {
        return VehicleModel.updateVehicleDataById(vehicleId, {shareDetails});
    }

    static updateVehicleDetailsById(vehicleId, updatedDetails) {
        return VehicleModel.updateVehicleDataById(vehicleId, updatedDetails);
    }

    static deleteVehicleById(vehicleId) {
        return Vehicle.findByIdAndDelete(vehicleId); 
    }

    static createVehicle(licenseNumber, owner) {
        const vehicle = new Vehicle({ licenseNumber, owner });
        UserModel.addVehicleById(owner, vehicle);
        vehicle.save();
        return vehicle;
    }

    static async vehicleExistsByLicenseNumber(licenseNumber) {
        const vehicle = await Vehicle.findOne({licenseNumber});
        return vehicle ? true : false;
    }
}

module.exports = VehicleModel;
