
const { Schema, model } = require("mongoose");

const finesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fineAmount: { type: Number, required: true },
    isPayed: { type: Boolean, required: true, default: false },
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

const Fine = model("Fine", finesSchema);

module.exports = Fine;
