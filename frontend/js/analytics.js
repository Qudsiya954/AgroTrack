// =========================
// ANALYTICS PAGE
// =========================

async function fetchAnalytics(){

    try{

        const response =
        await fetch(
            "http://localhost:5000/api/analytics",
            {

                headers:{

                    Authorization:
                    `Bearer ${token}`

                }

            }
        );

        const data =
        await response.json();

        console.log(data);

        // Average Temperature
        const avgTemp =
        document.querySelector(
            ".avg-temp"
        );

        if(avgTemp){

            avgTemp.innerText =
            data.avgTemperature + "°C";

        }

        // Average Humidity
        const avgHumidity =
        document.querySelector(
            ".avg-humidity"
        );

        if(avgHumidity){

            avgHumidity.innerText =
            data.avgHumidity + "%";

        }

        // Water Usage
        const waterUsage =
        document.querySelector(
            ".water-usage"
        );

        if(waterUsage){

            waterUsage.innerText =
            data.totalLogs * 5 + "L";

        }

        // Pump Cycles
        const pumpCycles =
        document.querySelector(
            ".pump-cycles"
        );

        if(pumpCycles){

            pumpCycles.innerText =
            data.totalLogs;

        }

        // Total Alerts
        const totalAlerts =
        document.querySelector(
            ".total-alerts"
        );

        if(totalAlerts){

            totalAlerts.innerText =
            data.totalAlerts;

        }

    } catch(error){

        console.log(error);

    }

}

fetchAnalytics();