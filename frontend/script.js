// script.js

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

fetchLogs();
setInterval(fetchLogs, 5000);
