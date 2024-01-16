// Server.js
const express = require("express");
const cookieParser = require("cookie-parser")

const { PORT } = require("./server/config");
const { dbConnect } = require("./server/db/dbConnect");
const { authorizationMiddleWare } = require("./server/controllers/auth");

const authRouter = require("./server/routes/auth");
const vehicleRouter = require("./server/routes/vehicle");
const messagesRouter = require("./server/routes/messages");
const profileRouter = require("./server/routes/profile");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + "/public"))

app.use("/api/auth", authRouter);
app.use("*", authorizationMiddleWare);

app.use("/api/vehicle", vehicleRouter);
app.use("/api/messages", messagesRouter);


async function main() {
    await dbConnect();
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log("Server is listening on port " + PORT);
    })
}

main();