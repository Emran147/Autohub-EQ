class seachVehicle {
    constructor(){
        this.searchVehicleModel = new searchVehicleModel
        this.searchVehicleRender = new searchVehicleRender
    }

    async  seachVehicle(){
        const carLicenseNumber  = $('#licensNumber').val()
        if (!carLicenseNumber.replace(/\s/g, '').length) {
            alert('Check the input')
        }
        try {        
            await this.searchVehicleModel.getVehicle(carLicenseNumber)
            const vehicle = this.searchVehicleModel.vehicle
            this.searchVehicleRender.rendererVehicle(vehicle)
        }
        catch(err) {
            console.log(err);
        }
    }
}