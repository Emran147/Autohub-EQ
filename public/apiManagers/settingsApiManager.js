class SettingsAPI {
    constructor() {
        this.damydata = {
           allonotifaction : true , 
           allowemail  : false , 
        };
    }

    async getSettings() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.get(baseApiRoutes.GETSETTINGS );
        // For the sake of simplicity, returning static data
        return this.damydata;
    }
    async updateSettings() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.post(baseApiRoutes.UPDATESETTINGS );
        // For the sake of simplicity, returning static data
        return this.damydata;
    }

}