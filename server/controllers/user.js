// User.js/controllers
// const UserModel = require("../models/user");

// class MessageController {
//     static async sendMessage(req, res) {
//         const userId = req.userId;
//         const { message } = req.body;
//         try {
//             const { email, phoneNumber } = await UserModel.getUserEmailAndPhoneNumber(userId);
//             console.log(`Email: ${email}, Phone Number: ${phoneNumber}, Message: ${message}`);
//             res.send("Message sent successfully");
//         } catch (error) {
//             console.error("Error sending message:", error.message);
//             res.status(500).send("Internal Server Error");
//         }
//     }
// }

// module.exports = MessageController;

const UserModel = require("../models/user");
class UserController {
    static async postUpdateEmail(req, res) {     
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

}

     
module.exports = UserController;