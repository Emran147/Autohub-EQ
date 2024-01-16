const { dbConnect, dbDisconnect } = require("../dbConnect");
const User = require("../schemas/user");
const Vehicle = require("../schemas/vehicle");

const users = require("./users");


initDB()

async function initDB() {
    await dbConnect();
    console.log("connected to DB")

    await initUserAndVehicleDocs();
}

// init users & vehicles documents
async function initUserAndVehicleDocs() {
    await User.deleteMany({})
    await Vehicle.deleteMany({})

    for(const user of users) {
        const vehicles = []
        for(const vehicle of user.vehicles){
            vehicles.push(new Vehicle(vehicle));
        }
        user.vehicles = vehicles;

        const userDoc = new User(user);
        vehicles.forEach(vehicle => {
            vehicle.Owner = userDoc;
            vehicle.save();
        })
        userDoc.save();
    }
}