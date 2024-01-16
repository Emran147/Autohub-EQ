class searchVehicleRender {
    constructor() {
        this.vehicleComponent = new Component(templates.VEHICLE_FOUND, containers.VEHICLE_FOUND);
    }

    rendererVehicle(vehicle) {
        this.vehicleComponent.render(vehicle, false);
    }
    rendererVehicleError() {

    }

}