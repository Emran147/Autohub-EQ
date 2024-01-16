
const MessagesModel = require("../models/MessagesModel");

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
}

module.exports = MessagesController;
