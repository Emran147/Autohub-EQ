const { dbConnect, dbDisconnect } = require("../dbConnect");
const User = require("../schemas/user");
const Vehicle = require("../schemas/vehicle");
const Settings = require("../schemas/settings")
const Messages = require("../schemas/messages")

const users = require("./users");
const messages = require("./messages");

initDB()

async function initDB() {
    await dbConnect();
    console.log("connected to DB")

    await initUserAndVehicleDocs();
    await initMessages();
}

// init users & vehicles documents
async function initUserAndVehicleDocs() {
    await User.deleteMany({})
    await Vehicle.deleteMany({})
    await Settings.deleteMany({})

    for(const user of users) {
        const vehicles = []
        for(const vehicle of user.vehicles){
            user.fullName = user.firstName + " " + user.lastName;
            vehicle.shareDetails = true;
            vehicles.push(new Vehicle(vehicle));
        }
        const userSettings = new Settings({ allowSMSNotifications: true, allowWhatsappNotifications: true, allowEmailNotifications: true, shareContacts: true });
        
        user.vehicles = vehicles;
        user.settings = userSettings;

        const userDoc = new User(user);
        userDoc.hashedPassword = "$2a$10$ixfvPP0T.kctdoQto7iFme3hGf/3BeMJbQ39LMoi7etozD5AH5ESW";

        vehicles.forEach(vehicle => {
            vehicle.owner = userDoc;
            vehicle.save();
        })
        userSettings.owner = userDoc;
        userSettings.save();
        userDoc.save();
    }
}

// init messages documents
async function initMessages() {
    await Messages.deleteMany({}).then()
    Messages.insertMany(messages)
}