class AuthModel {
    constructor() {
        this.authApiManager = new AuthApiManager();
    }
    // use AuthApiManager to login
    login(email, password) {
        return this.authApiManager.login(email, password);
    }
    // use AuthApiManager to register
    register(fullName, email, phoneNumber, password, language) {
        return this.authApiManager.register(fullName, email, phoneNumber, password, language);
    }
}
