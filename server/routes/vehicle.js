// vehicle.js\routes
const { Router } = require("express");
const VehicleController = require("../controllers/vehicle");

const router = Router();

router.get("/:licenseNumber", VehicleController.getVehicleByLicenseNumber);

module.exports = router;