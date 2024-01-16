class ContactModel {
    constructor() {
        this.messagesList = []
        this.contactApi = new ContactApi();

    }

    async getMessagesList() {
        this.messagesList = await this.contactApi.getMessageList();

    }
}