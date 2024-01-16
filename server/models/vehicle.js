// Vehicle.js \models
const { models } = require("mongoose");
const Vehicle = require("../db/schemas/vehicle");

class VehicleModel {
    static getVehicleByLicenseNumber(licenseNumber) {
        return Vehicle.findOne({ licenseNumber });
    }
      static getVehiclesByUserId(userId) { 
        return  Vehicle.find({ Owner: userId });
     
        } 
        static updateVehicleForSaleById(vehicleId, forsale) {
           return Vehicle.findByIdAndUpdate( vehicleId,{ $set: { forsale } });
    }
    static async updateShareVehicleDetailsById(vehicleId, shareDetails) {
      return Vehicle.findByIdAndUpdate( vehicleId,{ $set: { shareDetails } });
        
}
static updateVehicleDetailsById(vehicleId, updatedDetails) {
    return Vehicle.findByIdAndUpdate(vehicleId,{ $set: updatedDetails });
}
    }
module.exports = VehicleModel;
