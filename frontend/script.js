// script.js
const token = localStorage.getItem("token");

console.log("TOKEN:", token);

if (!token) {

    alert("No token found");

    window.location.href = "index.html";

}

const username = localStorage.getItem("username");

if (username) {

    const initial = username.charAt(0).toUpperCase();

    const profile =
        document.getElementById("profileInitial");

    if (profile) {
        profile.innerText = initial;
    }

}
// Backend API URL
const API_URL = "http://localhost:5000/api/sensors/latest";


// Fetch Sensor Data
async function fetchSensorData() {
    try {

        const response = await fetch(API_URL);
        const data = await response.json();
        document.querySelector(".backend-status").innerText = "Active";
        document.querySelector(".backend-status").style.color = "#22c55e";

        console.log(data);

        // Update Temperature
        document.querySelector(".temp-value").innerText =
            `${data.temperature}°C`;

        // Update Humidity
        document.querySelector(".humidity-value").innerText =
            `${data.humidity}%`;

        // Update Soil Moisture
        document.querySelector(".soil-value").innerText =
            `${data.soilMoisture}%`;

        // Update Light Intensity
        document.querySelector(".light-value").innerText =
            data.lightIntensity;

        // Update Pump Status
        document.querySelector(".pump-status").innerText =
            data.pumpStatus;

        // Dynamic Soil Status
        const soilStatus = document.querySelector(".soil-status");

        if (data.soilMoisture < 40) {
            soilStatus.innerText = "Dry Soil";
            soilStatus.style.color = "#facc15";
        } else {
            soilStatus.innerText = "Healthy Soil";
            soilStatus.style.color = "#22c55e";
        }

        // Dynamic Plant Health
        const healthText = document.querySelector(".health-text");

        if (data.soilMoisture < 40) {
            healthText.innerText = "NEEDS WATER";
            healthText.style.color = "#ef4444";
        } else {
            healthText.innerText = "HEALTHY";
            healthText.style.color = "#22c55e";
        }

    } catch (error) {
        console.log("Error Fetching Sensor Data:", error);
        document.querySelector(".backend-status").innerText = "Offline";
        document.querySelector(".backend-status").style.color = "#ef4444";
    }
}

// Fetch Immediately
fetchSensorData();

// Auto Refresh Every 5 Seconds
setInterval(fetchSensorData, 5000);

async function fetchLogs() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/sensors/logs"
        );

        const logs = await response.json();

        const tableBody =
            document.getElementById("logs-table-body");

        tableBody.innerHTML = "";

        logs.slice(0, 5).forEach(log => {

            const row = `
                <tr>
                    <td>${new Date(log.createdAt)
                        .toLocaleDateString()}</td>

                    <td>AUTO</td>

                    <td>
                        ${log.soilMoisture < 40
                            ? "Pump ON"
                            : "Pump OFF"}
                    </td>

                    <td class="green">
                        ${log.pumpStatus}
                    </td>
                </tr>
            `;

            tableBody.innerHTML += row;

        });

    } catch (error) {

        console.log("Error Fetching Logs:", error);

    }

}
function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    window.location.href =
        "http://127.0.0.1:5500/frontend/index.html";

}


fetchLogs();
setInterval(fetchLogs, 5000);

// =========================
// LIVE MONITOR PAGE SUPPORT
// =========================

const token = localStorage.getItem("token");

if (!token) {

    window.location.href =
    "http://127.0.0.1:5500/frontend/index.html";

}

const username = localStorage.getItem("username");

if (username) {

    const initial = username.charAt(0).toUpperCase();

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

// Update Live Timestamp
function updateTimestamp(){

    const time = new Date().toLocaleTimeString();

    const updated =
        document.getElementById("lastUpdated");

    if(updated){
        updated.innerText = time;
    }

}

setInterval(updateTimestamp,1000);
updateTimestamp();

// =========================
// IRRIGATION PAGE LOGIC
// =========================

// Threshold Slider
const thresholdSlider =
    document.getElementById("thresholdSlider");

const thresholdValue =
    document.getElementById("thresholdValue");

if(thresholdSlider){

    thresholdSlider.addEventListener("input", () => {

        thresholdValue.innerText =
            thresholdSlider.value + "%";

    });

}

// Pump Buttons
const pumpStatus =
    document.querySelector(".pump-status");

const pumpStatusText =
    document.querySelector(".pump-status-text");

const pumpOnBtn =
    document.querySelector(".pump-on-btn");

const pumpOffBtn =
    document.querySelector(".pump-off-btn");

if(pumpOnBtn){

    pumpOnBtn.addEventListener("click", () => {

        pumpStatus.innerText = "ON";
        pumpStatus.style.color = "#22c55e";

        pumpStatusText.innerText = "ON";
        pumpStatusText.style.color = "#22c55e";

    });

}

if(pumpOffBtn){

    pumpOffBtn.addEventListener("click", () => {

        pumpStatus.innerText = "OFF";
        pumpStatus.style.color = "#ef4444";

        pumpStatusText.innerText = "OFF";
        pumpStatusText.style.color = "#ef4444";

    });

}

// Mode Toggle
const modeButtons =
    document.querySelectorAll(".mode-btn");

modeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        modeButtons.forEach(b =>
            b.classList.remove("active-mode")
        );

        btn.classList.add("active-mode");

        const modeStatus =
            document.querySelector(".mode-status");

        modeStatus.innerText =
            btn.innerText.includes("AUTO")
            ? "AUTO"
            : "MANUAL";

    });

}); 

// =========================
// ALERTS PAGE LOGIC
// =========================

const clearAlertsBtn =
    document.querySelector(".clear-alerts-btn");

const alertCards =
    document.querySelectorAll(".alert-card");

if(clearAlertsBtn){

    clearAlertsBtn.addEventListener("click", () => {

        alertCards.forEach(card => {

            card.style.display = "none";

        });

        const alertCount =
            document.querySelector(".alert-count");

        if(alertCount){
            alertCount.innerText = "0";
        }

    });

}

// Dynamic Alert Simulation
function simulateSecurityAlert(){

    const attackItems =
        document.querySelectorAll(".attack-item span");

    attackItems.forEach(item => {

        if(item.innerText === "MONITORING"){

            item.style.color = "#facc15";

        }

    });

}

simulateSecurityAlert();

// =========================
// ANALYTICS PAGE LOGIC
// =========================

// Animate Trend Bars
const trendBars =
    document.querySelectorAll(".trend-bar");

trendBars.forEach(bar => {

    const finalHeight =
        bar.style.height;

    bar.style.height = "0";

    setTimeout(() => {

        bar.style.height = finalHeight;

    }, 300);

});

// Simulated Analytics Refresh
function refreshAnalytics(){

    console.log(
        "Analytics dashboard updated"
    );

}

setInterval(refreshAnalytics,10000);