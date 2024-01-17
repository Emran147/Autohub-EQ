const { Router } = require("express");
const { authorizationMiddleWare } = require("../controllers/auth");
const VehicleApprovalController = require("../controllers/vehicleApproval");

const router = Router();
router.use(authorizationMiddleWare);

router.get("/", VehicleApprovalController.getAllVehicleApprovals);
// router.post("/", VehicleApprovalController.createVehicleApproval);

module.exports = router;