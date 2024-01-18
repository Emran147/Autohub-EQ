const nodemailer = require('nodemailer');
const Config = require('../config');

class NodeMailerManager {
    static async sendEmail(toEmail, subject, text) {
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: Config.NODE_MAILER_EMAIL, 
                pass: Config.NODE_MAILER_SECRET, 
            },
        });

        const mailOptions = {
            from: Config.NODE_MAILER_EMAIL,
            to: toEmail,
            subject: subject,
            text: text,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${toEmail}`);
        } catch (error) {
            // console.error('Error sending email:', error);
            // throw error;
        }
    }
}

module.exports = NodeMailerManager;
