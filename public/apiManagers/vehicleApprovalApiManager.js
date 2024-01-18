class VehicleApprovalApiManager {
    static getVehicleApprovals() {
        return $.get(baseApiRoutes.VEHICLE_APPROVALS);
    }

    static sendVehicleApprovalRequest(licenseNumber, userID) {
        console.log(licenseNumber, userID)
        return $.post(baseApiRoutes.VEHICLE_APPROVALS, {licenseNumber, userID});
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
