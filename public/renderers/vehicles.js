class VehiclesRender {
    constructor() {
        this.vehiclesComponent = new Component(templates.VEHICLES_LIST, containers.VEHICLES_LIST);
    }

    renderVehicles(vehicles) {
        this.vehiclesComponent.render( {vehicles} , true);
    }

    rendererVehicleApprovalsError() {
    }
}
