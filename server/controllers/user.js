const UserModel = require("../models/user");

class MessageController {
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

module.exports = MessageController;

