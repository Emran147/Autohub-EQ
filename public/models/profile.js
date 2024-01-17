class ProfileModel {
    constructor(){
        this.profileApiManager = new ProfileApiManager()
        this.profileDetails = {}  
        this.updatedEmail = {}
        this.updatedPhoneNumber = {}
    }

    async getEmailAndPhonNumber() {
        this.profileDetails = await this.profileApiManager.getEmailAndPhonNumber();
    }

    async updateUserDetails() {
        this.profileDetails = await this.profileApiManager.updateUserDetails();
    }

    async updateEmail() {
        this.updatedEmail = await this.profileApiManager.updateEmail();
        this.profileDetails.email = this.updatedEmail.email
        return this.profileDetails        
    }

    async updatePhoneNumber() {
        this.updatedPhoneNumber = await this.profileApiManager.updatePhoneNumber();
        this.profileDetails.phoneNumber = this.updatedPhoneNumber.phoneNumber
        return this.profileDetails        
    }

    

}