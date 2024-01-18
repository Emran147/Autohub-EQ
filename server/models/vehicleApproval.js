// VehicleApproval/models
const VehicleApproval = require("../db/schemas/vehicleApproval");
class VehicleApprovalsModel {
    static getAllVehicleApprovals() {
        return VehicleApproval.find({});
    }

    static getVehicleApprovalById(_id) {
        return VehicleApproval.findById(_id);
    }

    static createVehicleApproval(user, licenseNumber, userIDNumber) {
        return VehicleApproval.create({user, licenseNumber, userIDNumber});
    }

    static deleteVehicleApprovalById(id) {
        return VehicleApproval.findByIdAndDelete(id).then();
    }
}
    
module.exports = VehicleApprovalsModel;
