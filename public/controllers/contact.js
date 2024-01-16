class Contact {
    constructor() {
        this.ContactModel = new ContactModel();
        this.ContactRender = new ContactRender();
        console.log(this.searchVehicleModel, this.searchVehicleRender)
    }

    async getMessagesList() {   
        try {
            await this.ContactModel.getMessagesList();
            const messagesList = this.ContactModel.messagesList;
            this.ContactRender.rendererMessageList(messagesList);
        } catch (err) {
            console.log(err);
        }
    }
    async sendMessage() {  
        const messageDropdown = document.getElementById('messageListdrop');
        const selectedMessage = messageDropdown.value;
        console.log(selectedMessage )
        try {
            
        } catch (err) {
            console.log(err);
        }
    }

}

const contact = new Contact();
