class VehiclesModel {
    constructor(){
        this.vehicles = []     
    }

    async getUserVehicles() {
        this.vehicles = await VehicleApiManager.getUserVehicles()
    }
    
    async updateVehicleForsale(vehicleId, forsale) {
        const vehicle = await VehicleApiManager.updateVehicleForsale(vehicleId, forsale);
        this.#updateVehicle(vehicle);
        return vehicle;
    }

    async updateVehicleShareDetails(vehicleId, shareDetails) {
        const vehicle = await VehicleApiManager.updateVehicleShareDetails(vehicleId, shareDetails);
        this.#updateVehicle(vehicle);
        return vehicle;
    }

    async updateVehicleDetails(vehicleId, manufacturer, model, year, note) {
        const vehicle = await VehicleApiManager.updateVehicleDetails(vehicleId, manufacturer, model, year, note);
        this.#updateVehicle(vehicle);
        return vehicle;
    }

    // TODO
    async deleteVehicle(vehicleId) {
        const response = await VehicleApiManager.deleteVehicle(vehicleId);
        this.#deleteVehicleById(vehicleId);
        return response;
    }

    #updateVehicle(vehicle) {
        const index = this.vehicles.findIndex(v => v._id === vehicle.id);
        this.vehicles[index] = vehicle;
    }

    #deleteVehicleById(id) {
        const index = this.vehicles.findIndex(vehicle => vehicle._id === id);
        if(index > -1) {
            this.vehicles.splice(index, 1);
        }
    }
}
