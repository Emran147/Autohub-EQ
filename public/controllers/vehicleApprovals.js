class VehicleApprovalController {
    constructor() {
        this.vehicleApprovalModel = new VehicleApprovalModel();
        this.vehicleApprovalRenderer = new VehicleApprovalsRenderer();
    }

    async getVehicleApprovals() {
        try {
            await this.vehicleApprovalModel.getVehicleApprovals();
            const vehicleApprovals = this.vehicleApprovalModel.vehicleApprovals;
            this.vehicleApprovalRenderer.renderVehicleApprovals(vehicleApprovals);
        } catch (err) {
            console.error(err);
        }
    }
}

const vehicleApprovalController = new VehicleApprovalController();
vehicleApprovalController.getVehicleApprovals();