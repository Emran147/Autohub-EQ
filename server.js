// Server.js
const express = require("express");
const { PORT } = require("./server/config");
const vehicleRouter = require("./server/routes/vehicle");
const messagesRouter = require("./server/routes/messages");

const app = express();

app.use("/api/vehicle", vehicleRouter);
app.use("/api/messages", messagesRouter);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})