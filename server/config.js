require("dotenv").config();

class Config {
    static PORT = 3000;
    static MONGODB_URL = "mongodb://127.0.0.1/AutoHub";
    static NODE_MAILER_EMAIL = "ek29091@gmail.com"; 
    static NODE_MAILER_SECRET = "hekq uwjy zomx czcj"; 
    static HASH_PASSWORD_SALT_ROUNDS = 10;
    static JWT_SECRET_KEY = "1235482";
    static TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || "";
    static TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || "";
    static TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || "";
}

module.exports = Config;
