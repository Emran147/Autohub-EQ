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


    async updateUserDetails() {
        const emailValue = document.getElementById('emailInput').value;
        const phoneNumberValue = document.getElementById('phoneNumberInput').value;
        const profileDetailsObj = {
            email : emailValue ,
            phoneNumber : phoneNumberValue
        }
        try {
            await this.ProfileModel.updateUserDetails(profileDetailsObj);
            const profileDetails = this.ProfileModel.profileDetails;
            this.ProfileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }

    async updateEmail() {
        const emailValue = document.getElementById('emailInput').value;
        const phoneNumberValue = document.getElementById('phoneNumberInput').value;
        const emailObj = {
            email : emailValue ,
        }
        try {
            await this.ProfileModel.updateEmail(emailObj);
            const profileDetails = this.ProfileModel.profileDetails;
            this.ProfileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


}

const profile = new Profile()
profile.getEmailAndPhonNumber()