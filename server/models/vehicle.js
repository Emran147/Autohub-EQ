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
        console.log(vehicleId)
        return Vehicle.findByIdAndDelete(vehicleId); 
    }

    static createVehicle(licenseNumber, user) {
        return Vehicle.create({licenseNumber, owner: user});
    }
}

module.exports = VehicleModel;
