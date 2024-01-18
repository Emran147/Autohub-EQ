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

    async resoleVehicleApproval(vehicleApprovalId, approve, msg, card) {
        try {
            await this.vehicleApprovalModel.resoleVehicleApproval(vehicleApprovalId, approve, msg);
            card.remove();
        } catch (err) {
            console.error(err);
        }
    }

    initEventListeners() {
        const controller = this;
        const vehicleApprovals = $("#vehicleApprovals");
        vehicleApprovals.on("click", ".verify-button", function() {
            const vehicleApprovalId = $(this).data("id");
            const card = $(this).closest(".card");
            controller.resoleVehicleApproval(vehicleApprovalId, true, "", card)
        })
        vehicleApprovals.on("click", ".reject-button", function() {
            const rejectionMsg = $(this).closest(".card").find(".reject-reason").val();
            const vehicleApprovalId = $(this).data("id");
            const card = $(this).closest(".card");
            controller.resoleVehicleApproval(vehicleApprovalId, false, rejectionMsg, card);
        })
    }
}

const vehicleApprovalController = new VehicleApprovalController();
vehicleApprovalController.getVehicleApprovals();