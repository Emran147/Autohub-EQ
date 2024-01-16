const mongoose = require("mongoose")
const { MONGODB_URL } = require("../config")

function mongoDBConnect() {
    mongoose.connect(MONGODB_URL);
}

function mongoDBDisconnect() {
    mongoose.connection.close();
}

module.exports = {
    dbConnect: mongoDBConnect,
    dbDisconnect: mongoDBDisconnect
};