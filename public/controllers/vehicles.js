class Vehicles {
    constructor(){
        this.VehiclesModel = new VehiclesModel()
        this.VehiclesRender = new VehiclesRender()
    }

    async getVehicles(){
        try {
            await this.VehiclesModel.getVehicles();
            const vehicles = this.VehiclesModel.vehicles;
            this.VehiclesRender.renderVehicles(vehicles)
        }
        catch(err) {
            console.log(err);
        }

    }

    async deleteVehicle(){
        try {
            await this.VehiclesModel.getVehicles();
            const vehicles = this.VehiclesModel.vehicles;
            this.VehiclesRender.renderVehicles(vehicles)
        }
        catch(err) {
            console.log(err);
        }

    }


    
}
const vehicles = new Vehicles()
vehicles.getVehicles()