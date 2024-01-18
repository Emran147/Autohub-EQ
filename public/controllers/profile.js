class Profile {
    constructor(){
        this.profileModel = new ProfileModel()
        this.profileRender = new ProfileRender()
    }

    async getEmailAndPhonNumber() {
        try {
            await this.profileModel.getEmailAndPhonNumber();
            const profileDetails = this.profileModel.profileDetails;
            this.profileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


    async updateEmail(email) {
        
        try {
            await this.profileModel.updateUserEmail(email);
            const profileDetails = this.profileModel.profileDetails;
            this.profileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


    async updatePhoneNumber(phoneNumber) {
        
        try {
            ("phooone")
            await this.profileModel.updateUserPhoneNumber(phoneNumber);
            const profileDetails = this.profileModel.profileDetails;
            this.profileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }

    async toggleEdit(field) {
        var isEditMode = document.getElementById(field + "Input").style.display === "none";
        var buttonText = isEditMode ? "Save" : "Edit";
        
        document.getElementById(field + "Text").style.display = isEditMode ? "none" : "block";
        document.getElementById(field + "Input").style.display = isEditMode ? "block" : "none";
        
        event.target.textContent = buttonText;
        
        if (!isEditMode) {
            var updatedValue = document.getElementById(field + "Input").value;
            if (field === 'email') {
                console.log("Saving Email:", updatedValue);
                await this.updateEmail(updatedValue);
            } else if (field === 'phoneNumber') {
                console.log("Saving Phone Number:", updatedValue);
                profile.updatePhoneNumber(updatedValue);
            }
        }
    }
    


}

const profile = new Profile()
profile.getEmailAndPhonNumber()