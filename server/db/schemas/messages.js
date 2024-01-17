
const { Schema, model } = require("mongoose");

const messagesSchema = new Schema({
    languages: {type: Object, required: true}
});

const Messages = model("Message", messagesSchema);
module.exports = Messages;