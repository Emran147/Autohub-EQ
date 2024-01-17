class SettingModel  {
    constructor() {
        this.settings = ["abc"];
    }

    async getSettings() {
        const settings = await SettingsAPI.getSettings();
        this.settings = this.#formatSettings(settings);
    }
    async updateSettings(settings) {
        const newSettings = await SettingsAPI.updateSettings(settings)
        this.settings = this.#formatSettings(newSettings)
    }

    #formatSettings(settings) {
        return Object.keys(settings)
        .filter(key => key != "owner" && key != "_id" && key != "__v")
        .map(setting => {
            return {
                name: setting,
                value: settings[setting]
            };
        })
    }
}