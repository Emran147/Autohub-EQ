class VehiclesRender {
    constructor() {
        this.vehiclesComponent = new Component(templates.VEHICLES_LIST, containers.VEHICLES_LIST);
    }

    renderVehicles(vehicles) {
        console.log(vehicles)
        this.vehiclesComponent.render( {vehicles} , true);
    }

    rendererVehicleApprovalsError() {
    }
}
