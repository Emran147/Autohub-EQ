class NewVehicleModel {
    constructor() {
    }

    sendVehicleApprovalRequest(licenseNumber, userIDNumber) {
        VehicleApprovalApiManager.sendVehicleApprovalRequest(licenseNumber, userIDNumber);
    }
}