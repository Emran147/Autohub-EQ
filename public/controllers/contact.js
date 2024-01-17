class Contact {
    constructor() {
        this.ContactModel = new ContactModel();
        this.ContactRender = new ContactRender();
    }

    async getMessagesList() {   
        try {
            await this.ContactModel.getMessagesList();
            const messagesList = this.ContactModel.messagesList;
            this.ContactRender.rendererMessageList(messagesList);
            $("#vehicleDetails").remove();
        } catch (err) {
            console.log(err);
        }
    }

    async sendMessage() {  
        const messageDropdown = document.getElementById('messageListdrop');
        const selectedMessageID = messageDropdown.value;
        const sharePhoneNumberCheckbox = document.querySelector('input[type="checkbox"][value="SharePhoneNumber"]');
        const isPhoneNumberShared = sharePhoneNumberCheckbox.checked;
        console.log(searchVehicle.searchVehicleModel.vehicle);
        const carLicenseNumber = searchVehicle.searchVehicleModel.vehicleData.vehicle.licenseNumber;
        const message = {
            msg_id : selectedMessageID,
            sharePhone : isPhoneNumberShared,
            licenseNumber : carLicenseNumber,
        }
        try {   
            const response = await this.ContactModel.sendMessage(message)
            alert("The Message Sent Successfuly")
            searchVehicle.searchVehicleRender.renderSearchForm();
        } catch (err) {
            console.log(err);
        }
    }

}

const contact = new Contact();
