class NewVehicleController {
    constructor() {
        this.newVehicleModel = new NewVehicleModel()
    }

    sendVehicleApprovalRequest() {
        const userIDNumber = $("#userID").val();
        const licenseNumber = $("#licenseNumber").val();
        this.newVehicleModel.sendVehicleApprovalRequest(licenseNumber, userIDNumber);
    }
}

const newVehicleController = new NewVehicleController();