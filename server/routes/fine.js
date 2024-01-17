
const express = require("express");
const router = express.Router();
const fineController = require("../controllers/fine");
const { authorizationMiddleWare } = require("../controllers/auth");

router.use(authorizationMiddleWare);

router.get("/", fineController.getUserFines);

router.post("/", fineController.createFine);

router.patch("/pay/", fineController.payFine);

module.exports = router;
