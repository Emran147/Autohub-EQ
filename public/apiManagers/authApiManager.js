class AuthApiManager {
    login(email, password) {
        return $.post("/api/auth/login", {email, password})
    }
    register(fullName, email, phoneNumber, password, language) {
        return $.post("/api/auth/register", {fullName, email, phoneNumber, password, language})
    }
}