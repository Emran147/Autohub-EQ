class VehiclesModel {
    constructor(){
        this.vehiclesApi = new vehiclesApiManager()
        this.vehicles = {}       
    }

    async getVehicles() {
        this.vehicles = await this.vehiclesApi.getVehicles()
        return this.vehicles
    }
    

}