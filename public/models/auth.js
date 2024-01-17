class AuthModel {
    constructor() {
        this.authApiManager = new AuthApiManager();
    }
    // use AuthApiManager to login
    login(email, password) {
        console.log(email)
        return this.authApiManager.login(email, password);
    }
    // use AuthApiManager to register
    register(fullName, email, phoneNumber, password, language) {
        return this.authApiManager.register(fullName, email, phoneNumber, password, language);
    }
}
