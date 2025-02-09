document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const userData = {
            email: formData.get("email"),
            password: formData.get("password")
        };

        setTimeout(() => {
            alert("Login successful! Redirecting to homepage...");
            window.location.href = "index.html";
        }, 1000);
    });
});
