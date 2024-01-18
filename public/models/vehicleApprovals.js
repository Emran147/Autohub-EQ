class VehicleApprovalModel {
    constructor() {
        this.vehicleApprovals = [];
    }

    async getVehicleApprovals() {
        this.vehicleApprovals = await VehicleApprovalApiManager.getVehicleApprovals();
    }

    resoleVehicleApproval(vehicleApprovalId, approve, msg) {
        return VehicleApprovalApiManager.resoleVehicleApproval(vehicleApprovalId, approve, msg);
    }
}