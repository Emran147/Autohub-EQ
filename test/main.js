$("#login").click(function() {
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();

    $.post("/api/auth/login", {email, password})
    .then((response) => console.log("Login Response:", response));
})

$("#reg").click(function() {
    const email = $("#regEmail").val();
    const password = $("#regPassword").val();
    const confirmPassword = $("#regConfirmPassword").val();

    $.post("/api/auth/register", {email, password, confirmPassword})
    .then((response) => console.log("Register Response:", response));
})