const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY, HASH_PASSWORD_SALT_ROUNDS } = require('../config');
const AuthModel = require('../models/auth');
const UserModel = require('../models/user');
const { serialize } = require("cookie");

class AuthController {
    static async test(req, res) {
        req.body = {email: "john.doe@example.com", password: "1234"}
        AuthController.login(req, res);
    }

    static async register(req, res) {
        const {email, phoneNumber, fullName, language, password} = req.body;

        // TODO - validate data
        if(!email || !phoneNumber || !fullName || !language || !password) {
            return res.status(400).send("Some data is missing!");
        }

        const hashedPassword = AuthController.#hashPassword(password);
        // TODO - add try + catch
        const user = await UserModel.createUser(email, phoneNumber, fullName, language, hashedPassword);

        const payload = {user_id: user._id, language: user.language};
        const tokenCookie = AuthController.#createTokenCookie(payload);
        res.setHeader('Set-Cookie', tokenCookie);
        res.send("Successfully Registered in");
    }

    static async login(req, res) {
        const {email, phoneNumber, password} = req.body;
        
        // TODO - validate data
        if(!email && !phoneNumber) {
            return res.status(400).send("no email or phoneNumber were provided!");
        }

        const user = await UserModel.getUserByEmailOrPhonenumber(email, phoneNumber);
        // TODO - replace with try + catch
        if(!user) {
            return res.status(404).send("No user exists with the provided email or phoneNumber");
        }

        const userHashedPassword = user.hashedPassword;
        // TODO - replace with try + catch
        if(!AuthController.#verifyPassword(password, userHashedPassword)) {
            return res.status(401).send("Invalid Credintials!");
        }

        const payload = {user_id: user._id, language: user.language};
        const tokenCookie = AuthController.#createTokenCookie(payload);
        res.setHeader('Set-Cookie', tokenCookie);
        res.send("Successfully logged in");
    }

    static authorizationMiddleWare(req, res, next) {
        const token = req.cookies.token;
        try {
            const {user_id, language} = jwt.verify(token, JWT_SECRET_KEY);
            req.user_id = user_id;
            req.language = language;
            next();
        }
        catch(error) {
            res.status(401).send("Invalid token!");
        }
    }

    static #createTokenCookie(payload) {
        const token = AuthController.#generateJWT(payload);
        const tokenCookie = serialize("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: 60 * 60 * 24 * 7
        })
        return tokenCookie;
    }

    static #generateJWT(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY, {
            expiresIn: 60 * 60 * 24 * 7
        })
    }

    static #hashPassword(password) {
        const saltRounds = HASH_PASSWORD_SALT_ROUNDS;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    }

    static #verifyPassword(password, hashedPassword) {
        // TODO - Throw error if the virification fails
        return bcrypt.compareSync(password, hashedPassword);
    }

}

module.exports = AuthController;