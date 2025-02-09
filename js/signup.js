document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = new FormData(signupForm);
        const userData = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password")
        };

        setTimeout(() => {
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        }, 1000);
    });
});
