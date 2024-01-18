class VehicleApprovalModel {
    constructor() {
        this.vehicleApprovals = [];
    }

    async getVehicleApprovals() {
        this.vehicleApprovals = await VehicleApprovalApiManager.getVehicleApprovals();
    }
}