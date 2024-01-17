const User = require("../db/schemas/user");

class UserModel {
    static getUserById(_id) {
        return User.findById(_id);
    }

    static async getLanguageById(userId) {
        const user = await User.findById(userId, {language: 1});
        return user.language;
    }

    static createUser(email, phoneNumber, fullName, language, hashedPassword) {
        const globalPhoneNumber = this.#processPhoneNumber(phoneNumber);
        const user = new User({
            email, phoneNumber: globalPhoneNumber, fullName, language, hashedPassword
        });
        const settings = new Settings({});
        settings.owner = user;
        user.settings = settings;
        user.save();
        settings.save();
        return user;
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
        console.log(_id, newEmail)
        return User.findByIdAndUpdate(_id, {$set: {email: newEmail}}, {new: true});
    }
    
    static  updatePhone(_id, newPhoneNumber) {
       return User.findByIdAndUpdate(_id, { $set: { phoneNumber: newPhoneNumber }}, {new: true});
    }
 
    static addVehicleById(userId, vehicleId) {
        return User.findOneAndUpdate({ _id: userId },{ $addToSet: { vehicles: vehicleId }});
    }

    static async isAdminById(_id) {
        const user = await User.findById(_id);
        return user.admin;
    }

    #processPhoneNumber(phoneNumber) {
        if(phoneNumber.length === 10 && phoneNumber[0] === "0" && phoneNumber[1] === "5") {
            return "+972" + phoneNumber.slice(1);
        }
        else if(phoneNumber.length === 13 && phoneNumber.slice(0, 4) === "+972") {
            return phoneNumber;
        }
        else {
            return ""
        }
    }
}

module.exports = UserModel;
