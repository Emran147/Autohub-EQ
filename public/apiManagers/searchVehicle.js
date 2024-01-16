class searchVehicleAPI {
    static getVehicle(carLicense) {
        $.get(baseApiRoutes.SEARCHVEHICLE+carLicense);
    }

}