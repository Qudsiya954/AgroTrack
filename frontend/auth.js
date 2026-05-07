// auth.js

const BASE_URL = "http://localhost:5000";

// =======================
// REGISTER
// =======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;

        const message = document.getElementById("message");

        try {

            const response = await fetch(`${BASE_URL}/api/auth/register`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username,
                    password
                })

            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {

                message.style.color = "#2dd65b";
                message.innerText = "Registration Successful";

                setTimeout(() => {

                    window.location.href = "index.html";

                }, 1500);

            } else {

                message.style.color = "red";
                message.innerText = data.message || "Registration Failed";

            }

        } catch (error) {

            message.style.color = "red";
            message.innerText = "Server Error";

            console.log(error);

        }

    });

}

// =======================
// LOGIN
// =======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        try {

            const response = await fetch(`${BASE_URL}/api/auth/login`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username,
                    password
                })

            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {

                // Store token
                localStorage.setItem("token", data.token);

                // Store username
                localStorage.setItem("username", username);

                message.style.color = "#2dd65b";
                message.innerText = "Login Successful";

                setTimeout(() => {

                    window.location.href = "dashboard.html";

                }, 1000);

            } else {

                message.style.color = "red";
                message.innerText = data.message || "Login Failed";

            }

        } catch (error) {

            message.style.color = "red";
            message.innerText = "Server Error";

            console.log(error);

        }

    });

}