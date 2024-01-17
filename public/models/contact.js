class ContactModel {
    constructor() {
        this.messagesList = []
    }

    async getMessagesList() {
        this.messagesList = await MessagesApiManager.getAllMessages();

    }
    async sendMessage(message) {
      const response =   await MessagesApiManager.sendMessage(message);
        return response
    }   
}