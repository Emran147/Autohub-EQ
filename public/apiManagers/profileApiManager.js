class ProfileApiManager {
    constructor(){
        this.damydata = {
            email : 'fkasjdfkas@gmail.com',
            phoneNumber : '050050505'
        }
    }
    async getEmailAndPhonNumber() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.get(baseApiRoutes.GETPROFILEDETAILS );
        // For the sake of simplicity, returning static data
        return this.damydata;
    }
    async updateUserDetails() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.post(baseApiRoutes.UPDATEUSERDETAILS );
        // For the sake of simplicity, returning static data
        return this.damydata;
    }
}