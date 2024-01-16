class searchVehicleModel {
    constructor() {
        this.vehicle = {};
        this.searchVehicleAPI = new searchVehicleAPI();

    }

    async getVehicle(licenseNumber) {
        this.vehicle = await this.searchVehicleAPI.getVehicle(licenseNumber);

    }
}