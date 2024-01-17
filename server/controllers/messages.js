const MessagesModel = require("../models/messages");
const UserModel = require("../models/user");

class MessagesController {
    static async getMessagesByLanguage(req, res) {
        const userId = req.userId;
        try {
            const language = await UserModel.getLanguageById(userId);
            const messages = await MessagesModel.getMessagesByLanguage(language);
            console.log(language)
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
            const { email, phoneNumber } = await UserModel.getUserEmailAndPhoneNumber(userId);
            console.log(`Email: ${email}, Phone Number: ${phoneNumber}, Message: ${message}`);
            res.send("Message sent successfully");
        } catch (error) {
            console.error("Error sending message:", error.message);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = MessagesController;
