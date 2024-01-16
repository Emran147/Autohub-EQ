const express = require("express");
const cookieParser = require("cookie-parser")

const { PORT } = require("./server/config");
const { dbConnect } = require("./server/db/dbConnect");
const authRouter = require("./server/routes/auth");
const { authorizationMiddleWare } = require("./server/controllers/auth");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/auth", authRouter);
app.use("*", authorizationMiddleWare);

app.use(express.static(__dirname + "/public"))



async function main() {
    await dbConnect();
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log("Server is listening on port " + PORT);
    })
}

main();