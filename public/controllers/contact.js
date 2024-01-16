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
        const carLicenseNumber = searchVehicle.searchVehicleModel.vehicle.licenseNumber;
        const message = {
            selectedMessageID : selectedMessageID,
            isPhoneNumberShared : isPhoneNumberShared,
            carLicenseNumber : carLicenseNumber,
        }
        try {   
            const response = await this.ContactModel.sendMessage(message)
            if(response=='succes'){
                alert("The Message Sent Successfuly")
                searchVehicle.searchVehicleRender.renderSearchForm();
            }
        } catch (err) {
            console.log(err);
        }
    }

}

const contact = new Contact();
