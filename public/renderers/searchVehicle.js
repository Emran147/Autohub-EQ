class SearchVehicleRender {
    constructor() {
        this.searchForm = new Component(templates.SEARCH_VEHICLE, containers.SEARCH_VEHICLE);
        this.vehicleComponent = new Component(templates.VEHICLE_FOUND, containers.VEHICLE_FOUND);
    }

    renderSearchForm() {
        this.searchForm.render();
    }
    rendererVehicle(vehicle) {
        this.vehicleComponent.render(vehicle, false);
    }
    removeVehicle(){
        this.vehicleComponent.clear();
    }
    rendererVehicleError() {

    }

}