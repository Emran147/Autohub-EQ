class Settings {
    constructor(){
        this.SettingsModel = new SettingModel() ;
        this.SettingsRender = new SettingsRender();
    }

    async getSettings() {
        try {
            console.log(' iam here ')
            await this.SettingsModel.getSettings();
            const settings = this.SettingsModel.settings;
            window.location.href = "../porifle.html";
            this.SettingsRender.renderSettings(settings)
        }
        catch(err) {
            console.log(err);
        }
    }

    async updateSettings() {

        try {
            await this.SettingsModel.getSettings();
            const settings = this.SettingsModel.settings;
            console.log(settings)
        }
        catch(err) {
            console.log(err);
        }
    }



}

const settings = new Settings();