class Profile {
    constructor(){
        this.ProfileModel = new ProfileModel()
        this.ProfileRender = new ProfileRender()
    }

    async getEmailAndPhonNumber() {
        try {
            await this.ProfileModel.getEmailAndPhonNumber();
            const profileDetails = this.ProfileModel.profileDetails;
            this.ProfileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


    async updateEmail(email) {
        
        try {
            await this.ProfileModel.updateEmail({email});
            const profileDetails = this.ProfileModel.profileDetails;
            this.ProfileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


    async updatePhoneNumber(phoneNumber) {
        
        try {
            await this.ProfileModel.updatePhoneNumber({phoneNumber});
            const profileDetails = this.ProfileModel.profileDetails;
            this.ProfileRender.renderProfileDetails(profileDetails)
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
            } else if (field === 'phone') {
                console.log("Saving Phone Number:", updatedValue);
                profile.updatePhoneNumber(updatedValue);
            }
        }
    }
    


}

const profile = new Profile()
profile.getEmailAndPhonNumber()