class SettingsRender {
    constructor() {
        this.settingsComponent = new Component(templates.SETTINGS, containers.SETTINGS);
    }

    renderSettings(settings) {
        console.log('the settings that I received ', settings);
        const settingsArray = Object.entries(settings).map(([key, value]) => ({ key, value }));
        console.log(settingsArray)
        this.settingsComponent.render( settingsArray , false);
    }

    rendererVehicleApprovalsError() {
    }
}
