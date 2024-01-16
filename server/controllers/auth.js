const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY, HASH_PASSWORD_SALT_ROUNDS } = require('../config');
const AuthModel = require('../models/auth');
const UserModel = require('../models/user');
const { serialize } = require("cookie");

class AuthController {
    static async login(req, res) {
        const {email, phoneNumber, password} = req.body;
        
        // TODO - validate data
        if(!email && !phoneNumber) {
            return res.status(400).send("no email or phoneNumber were provided!");
        }

        const user = await UserModel.getUserByEmailOrPhonenumber(email, phoneNumber);
        // TODO - replace by try + catch
        if(!user) {
            return res.status(404).send("No user exists with the provided email or phoneNumber");
        }

        const userHashedPassword = user.hashedPassword;
        // TODO - replace by try + catch
        if(!AuthController.#verifyPassword(password, userHashedPassword)) {
            return res.status(401).send("Invalid Credintials!");
        }

        const payload = {user_id: user._id, language: user.language};
        const token = AuthController.#generateJWT(payload);
        const tokenCookie = serialize("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: 60 * 60 * 24 * 7
        })
        res.setHeader('Set-Cookie', tokenCookie);
        res.send("Successfully logged in");
    }

    static #generateJWT(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY)
    }

    static #hashPassword(password) {
        const saltRounds = HASH_PASSWORD_SALT_ROUNDS;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    }

    static #verifyPassword(password, hashedPassword) {
        // TODO - Throw error if the virification fails
        return bcrypt.compareSync(password, hashedPassword, {
            expiresIn: 60 * 60 * 24 * 7
        });
    }

}

module.exports = AuthController;