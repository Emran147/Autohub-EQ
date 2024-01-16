// Server.js
const express = require("express");
const { PORT } = require("./server/config");
const { dbConnect } = require("./server/db/dbConnect");

const vehicleRouter = require("./server/routes/vehicle");
const messagesRouter = require("./server/routes/messages");

const app = express();

app.use("/api/vehicle", vehicleRouter);
app.use("/api/messages", messagesRouter);

app.use(express.static(__dirname + "/public"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function main() {
    await dbConnect();
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log("Server is listening on port " + PORT);
    })
}

main();