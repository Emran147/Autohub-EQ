class searchVehicleModel {
    constructor() {
        this.vehicleData = {};
    }

    async getVehicle(licenseNumber) {
        this.vehicleData = await VehicleApiManager.getVehicleByLicenseNumber(licenseNumber);
    }
}