class AdminRenderer {
    constructor() {
        this.vehicleApprovalsComponent = new Component(templates.VEHICLE_APPROVALS, containers.VEHICLE_APPROVALS);
    }

    rendererVehicleApprovals(vehicleApprovals) {
        this.vehicleApprovalsComponent.render(vehicleApprovals, false);
    }
    rendererVehicleApprovalsError() {

    }

}