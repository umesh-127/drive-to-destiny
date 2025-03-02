document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "umesh" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to main page
    } else {
        alert("Invalid username or password.");
    }
});


