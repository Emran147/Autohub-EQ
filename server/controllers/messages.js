const MessagesModel = require("../models/messages");
const UserModel = require("../models/user");
const SettingsModel = require("../models/settings");
const NodeMailerManager = require("../services/nodeMailer")
const TwilioMessagesManager = require("../services/twilioMsgs")

class MessagesController {
    static async getMessagesByLanguage(req, res) {
        const userId = req.userId;
        try {
            const language = await UserModel.getLanguageById(userId);
            const messages = await MessagesModel.getMessagesByLanguage(language);
            res.json(messages);
        } catch (error) {
            console.error("Error fetching messages:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async sendMessage(req, res) {
        const userId = req.userId;
        const { licenseNumber, msg_id } = req.body;

        try {
            const user = await UserModel.getUserById(userId);
            const { email, phoneNumber, language } = user;
            const { allowSMSNotifications, allowWhatsappNotifications, 
                allowEmailNotifications} = await SettingsModel.getSettingsByUserId(user._id);
            const message = await MessagesModel.getMessageById(msg_id, language);

            if(allowEmailNotifications) {
                NodeMailerManager.sendEmail(email, message);
            }
            if(allowWhatsappNotifications) {
                TwilioMessagesManager.sendWhatsapp(phoneNumber, message);
            }
            if(allowSMSNotifications) {
                TwilioMessagesManager.sendSMS(phoneNumber, message);
            }

            res.send("Message sent successfully");
        } catch (error) {
            console.error("Error sending message:", error.message);
            res.status(500).send("Internal Server Error");
        }
    }

}

module.exports = MessagesController;
