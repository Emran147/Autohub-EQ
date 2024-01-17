class ProfileModel {
    constructor(){
        this.profileDetails = {}  
    }

    async getEmailAndPhonNumber() {
        this.profileDetails = await UserApiManager.getMyEmailAndPhone();
    }

    async updateUserEmail(newEmail) {
        const { email } = await UserApiManager.updateEmail(newEmail);
        this.profileDetails.email = email;
    }

    async updateUserPhoneNumber(newPhoneNumber) {
        const { phoneNumber } = await UserApiManager.updatePhoneNumber(newPhoneNumber);
        this.profileDetails.phoneNumber = phoneNumber;
    }
}