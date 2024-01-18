class VehicleApprovalsRenderer {
    constructor() {
        this.vehicleApprovalsComponent = new Component(templates.VEHICLE_APPROVALS, containers.VEHICLE_APPROVALS);
    }

    renderVehicleApprovals(vehicleApprovals) {
        this.vehicleApprovalsComponent.render( {vehicleApprovals} , true);
    }
}