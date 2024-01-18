class NewVehicleController {
    constructor() {
        this.newVehicleModel = new NewVehicleModel()
    }

    sendVehicleApprovalRequest() {
        const userID = $("#userID").val();
        const licenseNumber = $("#licenseNumber").val();
        this.newVehicleModel.sendVehicleApprovalRequest(licenseNumber, userID);
    }
}

const newVehicleController = new NewVehicleController();