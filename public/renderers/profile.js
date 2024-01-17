class ProfileRender {
    constructor() {
        this.profileRenderComponent = new Component(templates.USER_PROFILE, containers.USER_PROFILE);
    }

    renderProfileDetails(userDetails) {
        this.profileRenderComponent.render( userDetails , true);
    }

    rendererVehicleApprovalsError() {
    }
}
