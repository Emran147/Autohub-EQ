class VehicleApiManager {
    static getVehicleByLicenseNumber(licenseNumber) {
        return $.get(baseApiRoutes.VEHICLE + carLicense);
    }

    // gets the curren user's vehicles
    static getMyVehicles() {
        return $.get(baseApiRoutes.VEHICLE)
    }

    static updateVehicleForsale(vehicleId, forsale) {
        return $.ajax({
            type: "PATCH",
            url: baseApiRoutes.VEHICLE + "forsale",
            data: {vehicleId, forsale},
        })
    }

    static updateVehicleShareDetails(vehicleId, shareDetails) {
        return $.ajax({
            type: "PATCH",
            url: baseApiRoutes.VEHICLE + "shareDetails",
            data: {vehicleId, shareDetails},
        })
    }

    static updateVehicleDetails(vehicleId, manufacturer, model, year, note) {
        return $.ajax({
            type: "PATCH",
            url: baseApiRoutes.VEHICLE + "details",
            data: {vehicleId, manufacturer, model, year, note},
        })
    }

    static deleteVehicle() {
        return $.ajax({
            type: "DELETE",
            url: baseApiRoutes.VEHICLE,
            data: {vehicleId},
        })
    }
}