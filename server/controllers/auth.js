const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY, HASH_PASSWORD_SALT_ROUNDS } = require('../config');

class AuthController {
    #generateJWT(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY)
    }

    #hashPassword(password) {
        const saltRounds = HASH_PASSWORD_SALT_ROUNDS;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    }

    #verifyPassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}

module.exports = AuthController;