class MessagesApiManager {
    static async getAllMessages() {
        return $.get(baseApiRoutes.MESSAGES)
    }
    static async sendMessage({licenseNumber, msg_id, sharePhone}) {
        return $.post(baseApiRoutes.MESSAGES + "send", {licenseNumber, msg_id, sharePhone})
    }
}