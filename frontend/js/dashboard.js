// =========================
// DASHBOARD PAGE LOGIC
// =========================

const API_URL =
"http://localhost:5000/api/sensors/latest";

// Fetch Sensor Data
async function fetchSensorData() {

    try {

        const response =
        await fetch(API_URL, {

            headers: {

                Authorization:
                `Bearer ${token}`

            }

        });

        const data =
        await response.json();

        console.log(data);

        // Backend Status
        const backend =
        document.querySelector(".backend-status");

        if (backend) {

            backend.innerText = "Active";

            backend.style.color =
            "#22c55e";

        }

        // Temperature
        const temp =
        document.querySelector(".temp-value");

        if (temp) {

            temp.innerText =
            `${data.temperature}°C`;

        }

        // Humidity
        const humidity =
        document.querySelector(".humidity-value");

        if (humidity) {

            humidity.innerText =
            `${data.humidity}%`;

        }

        // Soil Moisture
        const soil =
        document.querySelector(".soil-value");

        if (soil) {

            soil.innerText =
            `${data.soilMoisture}%`;

        }

        // Light Intensity
        const light =
        document.querySelector(".light-value");

        if (light) {

            light.innerText =
            data.lightIntensity;

        }

        

        // Soil Status
        const soilStatus =
        document.querySelector(".soil-status");

        if (soilStatus) {

            if (data.soilMoisture < 40) {

                soilStatus.innerText =
                "Dry Soil";

                soilStatus.style.color =
                "#facc15";

            } else {

                soilStatus.innerText =
                "Healthy Soil";

                soilStatus.style.color =
                "#22c55e";

            }

        }

        // Plant Health
        const healthText =
        document.querySelector(".health-text");

        if (healthText) {

            if (data.soilMoisture < 40) {

                healthText.innerText =
                "NEEDS WATER";

                healthText.style.color =
                "#ef4444";

            } else {

                healthText.innerText =
                "HEALTHY";

                healthText.style.color =
                "#22c55e";

            }

        }

    } catch (error) {

        console.log(
            "Error Fetching Sensor Data:",
            error
        );

        const backend =
        document.querySelector(".backend-status");

        if (backend) {

            backend.innerText =
            "Offline";

            backend.style.color =
            "#ef4444";

        }

    }

}

// Fetch Logs
async function fetchLogs() {

    try {

        const response =
        await fetch(
            "http://localhost:5000/api/sensors/logs",
            {

                headers: {

                    Authorization:
                    `Bearer ${token}`

                }

            }
        );

        const logs =
        await response.json();

        console.log(logs);

        const tableBody =
        document.getElementById(
            "logs-table-body"
        );

        if (!tableBody) return;

        tableBody.innerHTML = "";

        logs.slice(0, 5).forEach(log => {

            const row = `
                <tr>

                    <td>
                        ${new Date(
                            log.createdAt
                        ).toLocaleDateString()}
                    </td>

                    <td>AUTO</td>

                    <td>
                        ${log.soilMoisture < 40
                        ? "Irrigation ON"
                        : "Irrigation OFF"}
                    </td>

                    <td class="green">
                        ${log.irrigationStatus}
                    </td>

                </tr>
            `;

            tableBody.innerHTML += row;

        });

    } catch (error) {

        console.log(
            "Error Fetching Logs:",
            error
        );

    }

}
// =========================
// FETCH IRRIGATION STATUS
// =========================

async function fetchIrrigationStatus(){

    try{

        const response =
        await fetch(
            "http://localhost:5000/api/irrigation/status",
            {

                headers:{

                    Authorization:
                    `Bearer ${token}`

                }

            }
        );

        const data =
        await response.json();

        console.log(
            "Irrigation:",
            data
        );

        const pump =
        document.querySelector(".pump-status");

        if(pump){

            pump.innerText =
            data.pumpStatus;

            pump.style.color =
            data.pumpStatus === "ON"
            ? "#22c55e"
            : "#ef4444";

        }

    } catch(error){

        console.log(
            "Irrigation Error:",
            error
        );

    }

}

fetchSensorData();
fetchLogs();
fetchIrrigationStatus();

setInterval(fetchSensorData,5000);
setInterval(fetchLogs,5000);
setInterval(fetchIrrigationStatus,5000);