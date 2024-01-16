class Profile {
    constructor(){
        this.ProfileModel = new ProfileModel()
        this.ProfileRender = new ProfileRender()
    }
    async getEmailAndPhonNumber() {
        try {
            await this.ProfileModel.getEmailAndPhonNumber();
            const profileDetails = this.ProfileModel.profileDetails;
            console.log(' i got the data and i am sending it th data : ' , profileDetails)
            this.ProfileRender.renderProfileDetails(profileDetails)
        }
        catch(err) {
            console.log(err);
        }
    }


}

const profile = new Profile()
profile.getEmailAndPhonNumber()