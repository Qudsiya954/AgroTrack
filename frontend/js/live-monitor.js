// =========================
// LIVE MONITOR PAGE
// =========================

const LIVE_API =
"http://localhost:5000/api/sensors/latest";

// Update Timestamp
function updateTimestamp(){

    const updated =
    document.getElementById("lastUpdated");

    if(updated){

        updated.innerText =
        new Date().toLocaleTimeString();

    }

}

// Fetch Live Sensor Data
async function fetchLiveMonitorData(){

    try{

        const response =
        await fetch(LIVE_API, {

            headers: {

                Authorization:
                `Bearer ${token}`

            }

        });

        const data =
        await response.json();

        console.log(data);

        // Temperature
        const temp =
        document.querySelector(".temp-value");

        if(temp){

            temp.innerText =
            `${data.temperature}°C`;

        }

        // Humidity
        const humidity =
        document.querySelector(".humidity-value");

        if(humidity){

            humidity.innerText =
            `${data.humidity}%`;

        }

        // Soil
        const soil =
        document.querySelector(".soil-value");

        if(soil){

            soil.innerText =
            `${data.soilMoisture}%`;

        }

        // Light
        const light =
        document.querySelector(".light-value");

        if(light){

            light.innerText =
            data.lightIntensity;

        }

        // Backend Status
        const backend =
        document.querySelector(".backend-status");

        if(backend){

            backend.innerText =
            "Active";

            backend.style.color =
            "#22c55e";

        }

        // Backend Text
        const backendText =
        document.querySelector(
            ".backend-status-text"
        );

        if(backendText){

            backendText.innerText =
            "Connected";

            backendText.style.color =
            "#22c55e";

        }

        // Soil Status
        const soilStatus =
        document.querySelector(".soil-status");

        if(soilStatus){

            if(data.soilMoisture < 40){

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

    } catch(error){

        console.log(
            "Live Monitor Error:",
            error
        );

        const backend =
        document.querySelector(".backend-status");

        if(backend){

            backend.innerText =
            "Offline";

            backend.style.color =
            "#ef4444";

        }

    }

}

fetchLiveMonitorData();
updateTimestamp();

setInterval(fetchLiveMonitorData,5000);
setInterval(updateTimestamp,1000);