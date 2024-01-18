const UserModel = require("../models/user");
const VehicleModel = require("../models/vehicle");
const SettingsModel = require("../models/settings");
const VehicleApprovalsModel = require("../models/vehicleApproval");
const NodeMailerManager = require("../services/nodeMailer");
const TwilioMessagesManager = require("../services/twilioMsgs");

class VehicleApprovalController { 
    static async getAllVehicleApprovals(req, res) {
        try {
            // const currentUserId = req.userId;
            // const isAdmin = UserModel.isAdminById(currentUserId);
            // if(!isAdmin) {
            //     return res.status(401).send("Permission Denied");
            // }

            const vehicleApprovals = await VehicleApprovalsModel.getAllVehicleApprovals();
            res.json(vehicleApprovals);
        } catch (error) {
            console.error("Error fetching vehicle approvals:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async requestVehicleApproval(req, res) {
        const user = req.userId;
        const { licenseNumber, userIDNumber } = req.body;
        try {
            const vehicleExists = await VehicleModel.vehicleExistsByLicenseNumber(licenseNumber);
            if(vehicleExists) {
                return res.status(409).send("This car already exists")
            }
            await VehicleApprovalsModel.createVehicleApproval(user, licenseNumber, userIDNumber);
            res.send("Request Submitted Successfully!")
        } 
        catch (error) {
            console.error("Error resolving vehicle approval:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async resolveVehicleApproval(req, res) {
        const { vehicleApprovalId, approve, msg } = req.body;
        try {
            // const currentUserId = req.userId;
            // const isAdmin = UserModel.isAdminById(currentUserId);
            // if(!isAdmin) {
            //     return res.status(401).send("Permission Denied");
            // }
            
            if(approve) {
                const vehicleApproval = await VehicleApprovalsModel.getVehicleApprovalById(vehicleApprovalId);
                if(!vehicleApproval) {
                    res.status(404).send("Vehicle Approval does not exist")
                }
                const { user, licenseNumber} = vehicleApproval;
                console.log(vehicleApproval)
                
                // TODO - log approval

                // create vehicle
                VehicleModel.createVehicle(licenseNumber, user);

                // get user contacts
                const {email, phoneNumber } = await UserModel.getUserEmailAndPhoneNumber(user);

                // send Notifications
                const { allowSMSNotifications, allowWhatsappNotifications, 
                    allowEmailNotifications} = await SettingsModel.getSettingsByUserId(user);

                const message = approve ?
                    `The vehicle with the License Number ${licenseNumber} has been approved` :
                    `The vehicle with the License Number ${licenseNumber} has been rejected, reason: ${msg}`;

                console.log(user, email, phoneNumber, message)

                if(allowEmailNotifications) {
                    NodeMailerManager.sendEmail(email, message);
                }
                if(allowWhatsappNotifications) {
                    TwilioMessagesManager.sendWhatsapp(phoneNumber, message);
                }
                if(allowSMSNotifications) {
                    TwilioMessagesManager.sendSMS(phoneNumber, message);
                }
            }
            else {
                // TODO - log rejection
            }

            VehicleApprovalsModel.deleteVehicleApprovalById(vehicleApprovalId);
            res.send("The vehicle has been approved!");
        } catch (error) {
            console.error("Error resolving vehicle approval:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}


module.exports = VehicleApprovalController;