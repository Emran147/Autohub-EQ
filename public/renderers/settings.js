class SettingsRender {
    constructor() {
        this.settingsComponent = new Component(templates.SETTINGS, containers.SETTINGS);
    }

    renderSettings(settings) {
        const settingsArray = Object.entries(settings).map(([key, value]) => ({ key, value }));
        this.settingsComponent.render( settingsArray , true);
    }

    rendererVehicleApprovalsError() {
    }
}
