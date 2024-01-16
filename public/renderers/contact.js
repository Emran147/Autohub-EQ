class ContactRender {
    constructor() {       
        this.messageListComponent = new Component(templates.MESSAGE_LIST, containers.MESSAGE_LIST);
    }

    rendererMessageList(messageList) {
        this.messageListComponent.render(messageList, true);
    }
    rendererMessageListError() {

    }

}