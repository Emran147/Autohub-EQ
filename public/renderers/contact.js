class ContactRender {
    constructor() {       
        this.messageListComponent = new Component(templates.MESSAGE_LIST, containers.VEHICLE_FOUND);
    }

    rendererMessageList(messageList) {
        this.messageListComponent.render(messageList, true);
    }
    rendererMessageListError() {

    }

}