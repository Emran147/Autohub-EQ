class vehiclesApiManager {
    constructor() {
        this.damydata = {
           LicenseNumber : '5159' , 
           year  : '5944' , 
        };
    }
    async getVehicles() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.get(baseApiRoutes.GETVEHICLES );
        // For the sake of simplicity, returning static data
        return this.damydata;
    }


    
}