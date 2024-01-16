// vehicle.js\routes
const { Router } = require("express");
const VehicleController = require("../controllers/vehicle");
const { authorizationMiddleWare } = require("../controllers/auth");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/:licenseNumber", VehicleController.getVehicleByLicenseNumber);

module.exports = router;