// user.js/models
const User = require("../db/schemas/user");

class UserModel {
    static async getUserEmailAndPhoneNumber(_id) {
        try {
            const user = await User.findById({_id}, {email: 1, phoneNumber: 1});
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    static updateEmail(_id, newEmail) {
        return User.findByIdAndUpdate(_id, {$set: {email: newEmail}});
    }
}

module.exports = UserModel;


