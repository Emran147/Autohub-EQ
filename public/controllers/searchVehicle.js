class SearchVehicle {
    constructor() {
        this.searchVehicleModel = new searchVehicleModel();
        this.searchVehicleRender = new searchVehicleRender();
        console.log(this.searchVehicleModel, this.searchVehicleRender)
    }

    async searchVehicleByNumber() {
        const carLicenseNumber = $('#licensNumber').val();

        if (!carLicenseNumber.replace(/\s/g, '').length) {
            alert('Check the input');
        }
        try {
            await this.searchVehicleModel.getVehicle(carLicenseNumber);
            const vehicle = this.searchVehicleModel.vehicle;
            this.searchVehicleRender.rendererVehicle(vehicle);
        } catch (err) {
            console.log(err);
        }
    };
}

const searchVehicle = new SearchVehicle();
