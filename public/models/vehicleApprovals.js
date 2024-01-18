class VehicleApprovalModel {
    constructor() {
        this.vehicleApprovals = [];
    }

    async getVehicleApprovals() {
        this.vehicleApprovals = await VehicleApprovalApiManager.getVehicleApprovals();
    }

    async resoleVehicleApproval(vehicleApprovalId, approve, msg) {
        VehicleApprovalApiManager.resoleVehicleApproval(vehicleApprovalId, approve, msg);
    }
}