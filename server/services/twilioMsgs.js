const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = require('../config');

class TwilioMessagesManager {
    constructor() {
        this.client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    }

    sendSMS(phoneNumber, message) {
        this.client.messages
        .create({
          body: message,
          to: phoneNumber, // Text your number
          from: TWILIO_PHONE_NUMBER, // From a valid Twilio number
        })
        .then((message) => console.log("SMS Message sent with id:", message.sid))
        .catch((err) => undefined) // console.log("Failed to send SMS:", err));
    }

    sendWhatsapp(phoneNumber, message) {
        this.client.messages
        .create({
            body: message,
            from: "whatsapp:" + TWILIO_PHONE_NUMBER,
            to: "whatsapp:" + phoneNumber
        })
        .then(message => console.log("Whatsapp Message sent with id:", message.sid))
        .catch((err) => undefined) //console.log("Failed to send SMS:", err));
    }
}

module.exports = new TwilioMessagesManager();