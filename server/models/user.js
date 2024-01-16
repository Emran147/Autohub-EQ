const User = require("../db/schemas/user");

class UserModel {
    static getUserById(_id) {
        return User.findById(_id);
    }

    static createUser(email, phoneNumber, fullName, language, hashedPassword) {
        return User.create({
            email, phoneNumber, fullName, language, hashedPassword
        });
    }
    
    static getUserByEmailOrPhonenumber(email, phoneNumber) {
        return User.findOne({$or: [{email}, {phoneNumber}]});
    
        // TODO - throw error if user not found
    }

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
    static  updatePhone(_id, newPhoneNumber) {
       return User.findByIdAndUpdate(_id, { $set: { phoneNumber: newPhoneNumber }});
}
}
module.exports = UserModel;
