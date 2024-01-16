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

    static updateVehicleForSaleById(vehicleId, forsale) {
        return Vehicle.findByIdAndUpdate( vehicleId,{ $set: { forsale } });
    }

    static updateShareVehicleDetailsById(vehicleId, shareDetails) {
        return Vehicle.findByIdAndUpdate( vehicleId,{ $set: { shareDetails } });
    }

    static updateVehicleDetailsById(vehicleId, updatedDetails) {
        return Vehicle.findByIdAndUpdate(vehicleId,{ $set: {...updatedDetails}});
    }

    static  deleteVehicleById(vehicleId) {
        return Vehicle.findByIdAndRemove(vehicleId); 
    }

    static createVehicle(licenseNumber, user) {
        return Vehicle.create({licenseNumber, owner: user});
    }
}

module.exports = VehicleModel;
