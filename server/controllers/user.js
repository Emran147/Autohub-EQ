const UserModel = require("../models/user");
class UserController {
    static async getUserEmailAndPhoneNumber(req, res) {
        const userId = req.userId;
        try {
            const emailAndPhone = await UserModel.getUserEmailAndPhoneNumber(userId);
            res.send(emailAndPhone)
        }
        catch(error) {
            console.error("Error retrieving user email and phone:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async updateEmail(req, res) {     
        const userId = req.userId; 
        const { email } = req.body;
        console.log(req.body)
        try {
            const updatedUser = await UserModel.updateEmail(userId, email);
            if (!updatedUser) { 
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ email: updatedUser.email });
        } catch (error) {
            console.error("Error updating email:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async updatePhone(req, res) {
        const userId = req.userId;
        const { phoneNumber } = req.body;
        try {
            const updatedUser = await UserModel.updatePhone(userId, phoneNumber);
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({phoneNumber: updatedUser.phoneNumber});
        } catch (error) {
            console.error("Error updating phone number:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

     
module.exports = UserController;