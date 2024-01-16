const express = require("express");
const { PORT } = require("./server/config");

const app = express();


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})