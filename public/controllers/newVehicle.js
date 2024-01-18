class NewVehicleController {
    constructor() {
        this.newVehicleModel = new NewVehicleModel()
    }

    sendVehicleApprovalRequest() {
        const userIDNumber = $("#userID").val();
        const licenseNumber = $("#licenseNumber").val();
        this.newVehicleModel.sendVehicleApprovalRequest(licenseNumber, userIDNumber);
        alert('request has been sent , wait until admins verification')
    }
}

const newVehicleController = new NewVehicleController();