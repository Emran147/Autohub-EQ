class SettingModel  {
    constructor() {
        this.settings = {};
        this.SettingsAPI = new SettingsAPI();
    }

    async getSettings() {
        this.settings = await this.SettingsAPI.getSettings()
    }
    async updateSettings(settings) {
        this.settings = await this.SettingsAPI.updateSettings(settings)
    }
}