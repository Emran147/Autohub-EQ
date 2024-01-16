class ProfileModel {
    constructor(){
        this.profileApiManager = new ProfileApiManager()
        this.profileDetails = {}
    }
    async getEmailAndPhonNumber() {
        this.profileDetails = await this.profileApiManager.getEmailAndPhonNumber();
    }
    
    

}