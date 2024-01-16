// Vehicle.js\controllers
const VehicleModel = require("../models/vehicle");

class VehicleController {
    static async getVehicleByLicenseNumber(req, res) {
        const { licenseNumber } = req.params;
        const vehicle = await VehicleModel.getVehicleByLicenseNumber(licenseNumber);
        res.send(vehicle);
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
    static async patchUpdateVehicleForSale(req, res) {
        const { forsale,vehicleId } = req.body;
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
    static async patchUpdateVehicleDetails(req, res) {
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