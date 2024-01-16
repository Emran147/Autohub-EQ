class AdminController {
    constructor() {
        this.adminModel = new AdminModel();
        this.adminRenderer = new AdminRenderer();
    }

    async getVehicleApprovals() {
        try {
            await this.adminModel.getVehicleApprovals();
            const adminApprovals = this.adminModel.vehicleApprovals;
            this.adminRenderer.rendererVehicleApprovals(adminApprovals);
        }
        catch(err) {
            console.log(err);
        }
    }
}