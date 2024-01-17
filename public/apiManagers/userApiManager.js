class UserApiManager {
    static getMyEmailAndPhone() {
        return $.get(baseApiRoutes.USER + "emailAndPhone");
    }
    
    static updateEmail(email) {
        return $.ajax({
            type: "PATCH",
            url: baseApiRoutes.USER + "email",
            data: {email},
        })
    }

    static updatePhoneNumber(phoneNumber) {
        return $.ajax({
            type: "PATCH",
            url: baseApiRoutes.USER + "phone",
            data: {phoneNumber},
        })
    }
}