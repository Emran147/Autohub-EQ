class searchVehicleModel {
    constructor() {
         this.vehicle = {}
    }
    async getVehicle(licenseNumber) {
       this.vehicle = await searchVehicleAPI.getVehicle(licenseNumber);
    }
}