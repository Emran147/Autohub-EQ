// authController.js
class AuthController {
    constructor() {
        this.#init();
        this.authModel = new AuthModel();
    }
    #init() {
        $("form").submit(function(e) {
            e.preventDefault();
        });
    }

    // login
    // 1- get input values
    // 2- use AuthModel to send login request
    // 3- redirect to the main page on success - alert error on failure
    login() {
        const email = $('.sign-input[name="email"]').val();
        const password = $('.sign-input[name="pswd"]').val();

        this.authModel.login(email, password)
            .then(response => {
                window.location.href = 'index.html';
            })
            .catch(error => {
                alert('Login failed. Please check your credentials.');
            });
    }

    // register
    // 1- get input values
    // 2- use AuthModel to send register request
    // 3- redirect to the main page on success - alert error on failure
    register() {
        const fullName = $('.sign-input[name="txt"]').val();
        const email = $('.sign-input[name="email"]').val();
        const phoneNumber = $('.sign-input[name="phone"]').val();
        const password = $('.sign-input[name="pswd"]').val();
        // TODO - get language from html
        const language = "english";

        this.authModel.register(fullName, email, phoneNumber, password, language)
            .then(response => {
                window.location.href = 'index.html';
            })
            .catch(error => {
                alert('Registration failed. Please try again.');
            });
    }
}

const authController = new AuthController();
