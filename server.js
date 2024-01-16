const express = require("express");
const { PORT } = require("./server/config");
const { dbConnect } = require("./server/db/dbConnect");

require("./server/db/schemas/messages")
require("./server/db/schemas/settings")
require("./server/db/schemas/user")
require("./server/db/schemas/vehicle")
require("./server/db/schemas/vehicleApproval")

const app = express();

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