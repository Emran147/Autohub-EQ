class ContactApi {
    constructor() {
        this.damydata = [{
            _id : "123",
            text : "message1"
        },
        {
            _id : "321",
            text : "message2"
        },
        {
            _id : "444",
            text : "message3"
        },
    ]
    }

    async getMessageList() {
        // Example using $.get (make sure jQuery is loaded)
        // return $.get(baseApiRoutes.MESSAGELIST );

        // For the sake of simplicity, returning static data
        return this.damydata;
    }
    async sendMessage(message) {
        try {
            const response = await $.post(baseApiRoutes.SENDMESSAGE, message);
            console.log("Response from server:", response);
            return response
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }
}