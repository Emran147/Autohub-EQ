// vehicle.js\routes
const { Router } = require("express");
const VehicleController = require("../controllers/vehicle");
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/:licenseNumber", VehicleController.searchVehicleByLicenseNumber);
router.get("/", VehicleController.getUserVehicles);
router.patch("/forsale", VehicleController.updateVehicleForsale);
router.patch("/shareDetails", VehicleController.updateVehicleShareDetails);
router.patch("/details", VehicleController.updateVehicleDetails);
router.delete("/", VehicleController.deleteVehicle);

module.exports = router;