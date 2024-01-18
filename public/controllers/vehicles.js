class Vehicles {
    constructor(){
        this.vehiclesModel = new VehiclesModel()
        this.vehiclesRender = new VehiclesRender()
        this.initEventListeners();
    }

    async getVehicles(){
        try {
            await this.vehiclesModel.getUserVehicles();
            const vehicles = this.vehiclesModel.vehicles;
            this.vehiclesRender.renderVehicles(vehicles)
        }
        catch(err) {
            console.log(err);
        }
    }

    async updateVehicleForsale(vehicleId, forsale, forsaleCheckbox) {
        forsaleCheckbox.prop("checked", forsale)
        try {
            await this.vehiclesModel.updateVehicleForsale(vehicleId, forsale);
            if(forsale) {
                forsaleCheckbox.prop("checked", true)
            }
            else {
                forsaleCheckbox.prop("checked", false)
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    async updateVehicleShareDetails(vehicleId, shareDetails, shareDetailsCheckbox) {
        shareDetailsCheckbox.prop("checked", shareDetails)
        try {
            await this.vehiclesModel.updateVehicleShareDetails(vehicleId, shareDetails);
            if(shareDetails) {
                shareDetailsCheckbox.prop("checked", true)
            }
            else {
                shareDetailsCheckbox.prop("checked", false)
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    async updateVehicleDetails(vehicleId, manufacturer, model, year, note) {
        try {
            await this.vehiclesModel.updateVehicleDetails(vehicleId, manufacturer, model, year, note);
        }
        catch(err) {
            console.log(err);
        }
    }

    async deleteVehicle(vehicleId, deleteButton){
        try {
            await this.vehiclesModel.deleteVehicle(vehicleId);
            deleteButton.closest(".car-item").remove();
        }
        catch(err) {
            console.log(err);
        }
    }



    initEventListeners() {
        const controller = this;
        const vehiclesContainer = $("#vehiclesContainer")
        vehiclesContainer.on("click", ".forsale", function() {
            const vehicleId = $(this).data("id");
            const value = $(this).is(":checked");
            controller.updateVehicleForsale(vehicleId, value, $(this));
        })
        vehiclesContainer.on("click", ".shareDetails", function() {
            const vehicleId = $(this).data("id");
            const value = $(this).is(":checked");
            controller.updateVehicleShareDetails(vehicleId, value, $(this));
        })
        vehiclesContainer.on("click", ".updateDetails", function() {
            const updateDetailsBtn = $(this);
            const vehicleId = updateDetailsBtn.data("id");
            const manufacturer = updateDetailsBtn.siblings(".manufacturerInput").val();
            const model = updateDetailsBtn.siblings(".modelInput").val();
            const year = updateDetailsBtn.siblings(".yearInput").val();
            const note = updateDetailsBtn.siblings(".noteInput").val();

            console.log(vehicleId, manufacturer, model, year, note)
            controller.updateVehicleDetails(vehicleId, manufacturer, model, year, note)
        })
        vehiclesContainer.on("click", ".delete-car-button", function() {
            const vehicleId = $(this).data("id");
            controller.deleteVehicle(vehicleId, $(this))
        })
    }
}
const vehicles = new Vehicles()
vehicles.getVehicles()