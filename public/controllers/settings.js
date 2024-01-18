class Settings {
    constructor(){
        this.SettingsModel = new SettingModel() ;
        this.SettingsRender = new SettingsRender();
    }

    async getSettings() {
        try {
            await this.SettingsModel.getSettings();
            const settings = this.SettingsModel.settings;
            this.SettingsRender.renderSettings(settings)
        }
        catch(err) {
            console.log(err);
        }
    }

     getCheckboxValues() {
        const checkboxes = document.querySelectorAll('.settings-checkbox');
        let settings = {};
        checkboxes.forEach(checkbox => {
            settings[checkbox.name] = checkbox.checked;
        });
        return settings;
    }
    

    async updateSettings() {
        const settings = this.getCheckboxValues();
        try {
            await this.SettingsModel.updateSettings(settings);
            const settingsAfterUpdate = this.SettingsModel.settings;
            this.SettingsRender.renderSettings(settingsAfterUpdate)
        }
        catch(err) {
            console.log(err);
        }
    }



}
const settings = new Settings();
settings.getSettings()