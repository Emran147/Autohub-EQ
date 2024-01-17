class ContactModel {
    constructor() {
        this.messagesList = []
    }

    async getMessagesList() {
        this.messagesList = await MessagesApiManager.getAllMessages();
    }
    
    sendMessage(message) {
        const response = MessagesApiManager.sendMessage(message);
        return response
    }   
}