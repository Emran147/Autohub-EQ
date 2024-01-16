
const MessagesModel = require("../models/messages");

class MessagesController {
    static async getMessagesByLanguage(req, res) {
        const { language } = req.params;
        try {
            const messages = await MessagesModel.getMessagesByLanguage(language);
            res.json(messages);
        } catch (error) {
            console.error("Error fetching messages:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async sendMessage(req, res) {
        const userId = req.userId;
        const { message } = req.body;
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
