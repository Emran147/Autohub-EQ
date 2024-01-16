const User = require("../db/schemas/user");

class AuthModel {
    static getUserHashedPasswordById(_id) {
        return User.findOne({_id}, {hashedPassword: 1});
    }
}

module.exports = AuthModel;