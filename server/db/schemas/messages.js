const { Schema, model } = require("mongoose");

const messagesSchema = new Schema({
    languages: {type: Object, required: true}
});

const Messages = model("message", messagesSchema);
module.exports = Messages;