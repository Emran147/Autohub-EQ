const express = require("express");
const { PORT } = require("./server/config");
const { dbConnect } = require("./server/db/dbConnect");
const authRouter = require("./server/routes/auth");

const app = express();

app.use(express.static(__dirname + "/public"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/auth", authRouter);

async function main() {
    await dbConnect();
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log("Server is listening on port " + PORT);
    })
}

main();