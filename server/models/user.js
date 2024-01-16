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
}

module.exports = UserModel;


