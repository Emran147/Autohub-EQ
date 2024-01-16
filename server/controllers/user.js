  const UserModel = require("../models/user");
   class UserController {
    static async patchUpdateEmail(req, res) {     
        const userId = req.userId; 
        const { newEmail } = req.body;
        try {
            const updatedUser = await UserModel.updateEmail(userId, newEmail);
            if (!updatedUser) { 
                return res.status(404).json({ message: "User not found" });
            }

            res.json({ message: "Email updated successfully" });
        } catch (error) {
            console.error("Error updating email:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    static async patchUpdatePhone(req, res) {
        const userId = req.userId;
        const { newPhoneNumber } = req.body;
        try {
            const updatedUser = await UserModel.updatePhone(userId, newPhoneNumber);
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ message: "Phone number updated successfully" });
        } catch (error) {
            console.error("Error updating phone number:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

     
module.exports = UserController;