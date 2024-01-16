class AdminModel {
    constructor() {
        this.vehicleApprovals = [];
    }
    async getVehicleApprovals() {
        this.vehicleApprovals = await AdminApiManager.getVehicleApprovals();
    }
}