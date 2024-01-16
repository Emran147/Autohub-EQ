class SettingModel  {
    constructor() {
        this.settings = {};
        this.SettingsAPI = new SettingsAPI();
    }

    async getSettings() {
        this.settings = await this.SettingsAPI.getSettings()
    }
}