// VehicleApproval/models
const VehicleApproval = require("../db/schemas/vehicleApproval");
class VehicleApprovalsModel {
    static getAllVehicleApprovals() {
        return VehicleApproval.find({});
    }

    static getVehicleApprovalById(_id) {
        return VehicleApproval.findById(_id);
    }
}
    



module.exports = VehicleApprovalsModel;
