const token = localStorage.getItem("token");

if (!token) {

    window.location.href =
    "http://127.0.0.1:5500/frontend/index.html";

}

const username = localStorage.getItem("username");

if (username) {

    const initial =
    username.charAt(0).toUpperCase();

    const profile =
    document.getElementById("profileInitial");

    if (profile) {

        profile.innerText = initial;

    }

}

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    window.location.href =
    "http://127.0.0.1:5500/frontend/index.html";

}