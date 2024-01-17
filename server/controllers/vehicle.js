const VehicleModel = require("../models/vehicle");
const UserModel = require("../models/user");
const SettingsModel = require("../models/settings");

class VehicleController {
    static async searchVehicleByLicenseNumber(req, res) {
        const { licenseNumber } = req.params;
        const vehicle = await VehicleModel.getVehicleByLicenseNumber(licenseNumber);
        const userSettings = await SettingsModel.getSettingsByUserId(vehicle.owner);

        const responseData = { 
            vehicle: {licenseNumber: vehicle.licenseNumber, forSale: vehicle.forSale}, 
            user: {}
        };

        if(userSettings.shareContacts) {
            const user = await UserModel.getUserById(userSettings.owner);
            responseData.user = {phoneNumber: user.phoneNumber, email: user.email};
        }

        if(vehicle.shareDetails) {
            responseData.vehicle = { ...responseData.vehicle,
                manufacturer: vehicle.manufacturer, model: vehicle.model, year: vehicle.year, note: vehicle.note
            }
        }
        res.send(responseData);
    }

    static async getUserVehicles(req, res) {
        const  userId  = req. userId;
        try {
            const vehicles = await VehicleModel.getVehiclesByUserId(userId);
            res.json(vehicles);
        } catch (error) {
            console.error("Error fetching user's vehicles:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async updateVehicleForsale(req, res) {
        const { forsale, vehicleId } = req.body;
        try {
            const updatedVehicle = await VehicleModel.updateVehicleForSaleById(vehicleId, forsale);
            if (!updatedVehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json({ message: "Vehicle for sale status updated successfully", vehicle: updatedVehicle });
        } catch (error) {
            console.error("Error updating vehicle for sale status:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    static async updateVehicleDetails(req, res) {
        const { vehicleId, model, year, note, manufacturer } = req.body;
        const updatedDetails = {model, year, note, manufacturer};
        try {
            const updatedVehicle = await VehicleModel.updateVehicleDetailsById(vehicleId, updatedDetails);
            if (!updatedVehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json({ message: "Vehicle details updated successfully", vehicle: updatedVehicle });
        } catch (error) {
            console.error("Error updating vehicle details:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async deleteVehicle(req, res) {
        const vehicleId  = req.vehicleId ;
        try {
            const deletedVehicle = await VehicleModel.deleteVehicleById(vehicleId);
            if (!deletedVehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json({ message: "Vehicle deleted successfully" });
        } catch (error) {
            console.error("Error deleting vehicle:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = VehicleController