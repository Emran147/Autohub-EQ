class VehicleApprovalApiManager {
    static getVehicleApprovals() {
        return $.get(baseApiRoutes.VEHICLE_APPROVALS);
    }

    static sendVehicleApprovalRequest(licenseNumber, userIDNumber) {
        return $.post(baseApiRoutes.VEHICLE_APPROVALS, {licenseNumber, userIDNumber});
    }

    static resoleVehicleApproval(approve, msg) {
        if(approve) {
            $.post(baseApiRoutes.VEHICLE_APPROVALS + "resolve", {approve})
        }
        else {
            $.post(baseApiRoutes.VEHICLE_APPROVALS + "resolve", {approve, msg})
        }
    }
}
