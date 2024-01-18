class VehicleApprovalController {
    constructor() {
        this.vehicleApprovalModel = new VehicleApprovalModel();
        this.vehicleApprovalRenderer = new VehicleApprovalsRenderer();
        this.initEventListeners();
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

    async resoleVehicleApproval(vehicleApprovalId, approve, msg) {
        try {
            await this.vehicleApprovalModel.resoleVehicleApproval(vehicleApprovalId, approve, msg);
        } catch (err) {
            console.error(err);
        }
    }

    initEventListeners() {
        const controller = this;
        const vehicleApprovals = $("#vehicleApprovals");
        vehicleApprovals.on("click", ".verify-button", function() {
            const vehicleApprovalId = $(this).data("id");
            controller.resoleVehicleApproval(vehicleApprovalId, true)
        })
        vehicleApprovals.on("click", ".reject-button", function() {
            const rejectionMsg = $(this).closest(".card").find(".reject-reason").val();
            const vehicleApprovalId = $(this).data("id");
            controller.resoleVehicleApproval(vehicleApprovalId, false, rejectionMsg);
        })
    }
}

const vehicleApprovalController = new VehicleApprovalController();
vehicleApprovalController.getVehicleApprovals();