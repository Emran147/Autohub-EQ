class SettingsRender {
    constructor() {
        this.settingsComponent = new Component(templates.SETTINGS, containers.SETTINGS);
    }

    renderSettings(settings) {
        this.settingsComponent.render({settings}, true);
    }

    rendererVehicleApprovalsError() {
    }
}
