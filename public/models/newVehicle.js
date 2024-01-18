class NewVehicleModel {
    constructor() {
    }

    sendVehicleApprovalRequest(licenseNumber, userID) {
        VehicleApprovalApiManager.sendVehicleApprovalRequest(licenseNumber, userID);
    }
}