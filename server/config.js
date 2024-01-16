class Config {
    static PORT = 3000;
    static MONGODB_URL = "mongodb://127.0.0.1/AutoHub";
    static HASH_PASSWORD_SALT_ROUNDS = 10;
    static JWT_SECRET_KEY = "1235482";
}

module.exports = Config;