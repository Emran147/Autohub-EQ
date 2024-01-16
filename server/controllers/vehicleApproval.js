const UserModel = require("../models/user");
const VehicleModel = require("../models/vehicle");
const VehicleApprovalsModel = require("../models/vehicleApproval");

// VehicleApproval.js/Controllers
class VehicleApprovalController { 
    static async getAllVehicleApprovals(req, res) {
        try {
            const vehicleApprovals = await VehicleApprovalsModel.getAllVehicleApprovals();
            res.json(vehicleApprovals);
        } catch (error) {
            console.error("Error fetching vehicle approvals:", error);
            res.status(500).send("Internal Server Error");
        }
    }
            static async postResolveVehicleApproval(req, res) {
                const { approvalId, approved } = req.body;
                try {
                    if(approved) {
                        const vehicleApproval = await VehicleApprovalsModel.getVehicleApprovalById(approvalId);
                        const { user, licenseNumber} = vehicleApproval;
                        const vehicle = await VehicleModel.getVehicleByLicenseNumber(licenseNumber);
                        VehicleModel.createVehicle({licenseNumber, user});
                        UserModel.addVehicleById(user, vehicle);
                        // TODO - log approval
                    }
                    else {
                        // TODO - log rejection
                    }
                    if (!resolvedApproval) {
                        return res.status(404).json({ message: "Approval not found" });
                    }
        
                    res.json({ message: "Approval resolved successfully", approval: resolvedApproval });
                } catch (error) {
                    console.error("Error resolving vehicle approval:", error);
                    res.status(500).send("Internal Server Error");
                }
            }
    }


module.exports = VehicleApprovalController;