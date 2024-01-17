
const Message = require("../db/schemas/messages");

class MessagesModel {
    static async getMessagesByLanguage(language) {
        const messages = await Message.find({});
        return messages.map(msg => {
            return {
                _id: msg._id,
                text: msg.languages[language]
            }
        })
    }

    static async getMessageById(messageId, language) {
        const msg = await Message.findById(messageId);
        console.log(msg);
        return msg.languages[language]
    }
}

module.exports = MessagesModel;
