class SettingsAPI {
    static async getSettings() {
        return $.get(baseApiRoutes.SETTINGS);
    }
    static async updateSettings(allowSMSNotifications, allowWhatsappNotifications, allowEmailNotifications, shareContacts) {
        return $.post(baseApiRoutes.SETTINGS, {allowSMSNotifications, allowWhatsappNotifications, allowEmailNotifications, shareContacts});
    }

}