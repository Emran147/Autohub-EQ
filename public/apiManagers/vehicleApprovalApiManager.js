class VehicleApprovalApiManager {
    static getVehicleApprovals() {
        return $.get(baseApiRoutes.VEHICLE_APPROVALS);
    }

    static sendVehicleApprovalRequest(licenseNumber, userIDNumber) {
        return $.post(baseApiRoutes.VEHICLE_APPROVALS, {licenseNumber, userIDNumber});
    }

    static resoleVehicleApproval(vehicleApprovalId, approve, msg) {
        return $.post(baseApiRoutes.VEHICLE_APPROVALS + "resolve", {vehicleApprovalId, approve, msg})
    }
}
