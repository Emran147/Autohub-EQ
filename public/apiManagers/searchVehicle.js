class searchVehicleAPI {
    static async getVehicle(carLicense) {
        return $.get(baseApiRoutes.VEHICLE + carLicense);
    }
}
