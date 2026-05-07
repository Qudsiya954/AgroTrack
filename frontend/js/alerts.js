// =========================
// ALERTS PAGE
// =========================

const alertsContainer =
document.getElementById(
    "alertsContainer"
);

const alertCount =
document.querySelector(
    ".alert-count"
);

const clearAlertsBtn =
document.querySelector(
    ".clear-alerts-btn"
);

// FETCH ALERTS
async function fetchAlerts(){

    try{

        const response =
        await fetch(
            "http://localhost:5000/api/alerts",
            {

                headers:{

                    Authorization:
                    `Bearer ${token}`

                }

            }
        );

        const alerts =
        await response.json();

        console.log(alerts);

        if(!Array.isArray(alerts))
            return;

        alertsContainer.innerHTML = "";

        alertCount.innerText =
        alerts.length;

        alerts.forEach(alert => {

            let alertClass =
            "security-alert";

            if(alert.severity === "HIGH"){

                alertClass =
                "critical-alert";

            } else if(
                alert.severity === "MEDIUM"
            ){

                alertClass =
                "warning-alert";

            }

            const card = `

                <div class="alert-card ${alertClass}">

                    <div class="alert-icon">
                        ⚠️
                    </div>

                    <div class="alert-content">

                        <h3>
                            ${alert.type}
                        </h3>

                        <p>
                            ${alert.message}
                        </p>

                        <span class="alert-time">

                            ${new Date(
                                alert.createdAt
                            ).toLocaleString()}

                        </span>

                    </div>

                </div>

            `;

            alertsContainer.innerHTML +=
            card;

        });

    } catch(error){

        console.log(error);

    }

}

// CLEAR ALERTS
if(clearAlertsBtn){

    clearAlertsBtn.addEventListener(
        "click",
        async () => {

            try{

                await fetch(
                    "http://localhost:5000/api/alerts/clear",
                    {

                        method:"DELETE",

                        headers:{

                            Authorization:
                            `Bearer ${token}`

                        }

                    }
                );

                fetchAlerts();

            } catch(error){

                console.log(error);

            }

        }
    );

}

fetchAlerts();

setInterval(fetchAlerts,5000);