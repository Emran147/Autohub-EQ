class searchVehicleAPI {
    constructor() {
        this.damydata = {
            make: 'Audi', model: 'A3', year: 2020, licenseNumber: 'DEF789'
        };
    }

    async getVehicle(carLicense) {
        // Example using $.get (make sure jQuery is loaded)
        // return $.get(baseApiRoutes.SEARCHVEHICLE + carLicense);

        // For the sake of simplicity, returning static data
        return this.damydata;
    }
}
