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
            user.fullName = user.firstName + " " + user.lastName;
            vehicles.push(new Vehicle(vehicle));
        }
        user.vehicles = vehicles;

        const userDoc = new User(user);
        userDoc.hashedPassword = "$2a$10$ixfvPP0T.kctdoQto7iFme3hGf/3BeMJbQ39LMoi7etozD5AH5ESW";

        vehicles.forEach(vehicle => {
            vehicle.Owner = userDoc;
            vehicle.save();
        })
        userDoc.save();
    }
}