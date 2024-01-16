const User = require("../db/schemas/user");

class UserModel {
    static createUser(email, phoneNumber, fullName, language, hashedPassword) {
        return User.create({
            email, phoneNumber, fullName, language, hashedPassword
        });
    }

    static getUserByEmailOrPhonenumber(email, phoneNumber) {
        return User.findOne({$or: [{email}, {phoneNumber}]});

        // TODO - throw error if user not found
    }
}

module.exports = UserModel;