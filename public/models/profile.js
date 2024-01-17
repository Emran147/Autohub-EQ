class ProfileModel {
    constructor(){
        this.profileDetails = {}  
        this.updatedEmail = {}
        this.updatedPhoneNumber = {}
    }

    async getEmailAndPhonNumber() {
        this.profileDetails = await UserApiManager.getMyEmailAndPhone();
    }

    async updateUserEmail(newEmail) {
        this.profileDetails.email = await UserApiManager.updateEmail(newEmail);
    }

    async updateUserPhoneNumber(phoneNumber) {
        this.profileDetails.phoneNumber = await UserApiManager.updatePhoneNumber(phoneNumber);
    }
}