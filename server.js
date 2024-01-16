const express = require("express");
const { PORT } = require("./server/config");
const vehicleRouter = require("./server/routes/vehicle");

const app = express();

app.use("/api/vehicle", vehicleRouter);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})