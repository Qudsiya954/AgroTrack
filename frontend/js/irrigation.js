
// =========================
// IRRIGATION PAGE
// =========================

// Threshold Slider
const thresholdSlider =
document.getElementById("thresholdSlider");

const thresholdValue =
document.getElementById("thresholdValue");

if(thresholdSlider){

    thresholdSlider.addEventListener(
        "input",
        () => {

            thresholdValue.innerText =
            thresholdSlider.value + "%";

        }
    );

}

// Pump Controls
const pumpStatus =
document.querySelector(".pump-status");

const pumpStatusText =
document.querySelector(".pump-status-text");

const pumpOnBtn =
document.querySelector(".pump-on-btn");

const pumpOffBtn =
document.querySelector(".pump-off-btn");

if(pumpOnBtn){

    pumpOnBtn.addEventListener(
        "click",
        async () => {

            try{

                await fetch(
                    "http://localhost:5000/api/irrigation/update",
                    {

                        method:"POST",

                        headers:{
                            "Content-Type":
                            "application/json",

                            Authorization:
                            `Bearer ${token}`
                        },

                        body: JSON.stringify({

                            pumpStatus:"ON"

                        })

                    }
                );

                fetchIrrigationStatus();

            } catch(error){

                console.log(error);

            }

        }
    );

}

if(pumpOffBtn){

    pumpOffBtn.addEventListener(
        "click",
        async () => {

            try{

                await fetch(
                    "http://localhost:5000/api/irrigation/update",
                    {

                        method:"POST",

                        headers:{
                            "Content-Type":
                            "application/json",

                            Authorization:
                            `Bearer ${token}`
                        },

                        body: JSON.stringify({

                            pumpStatus:"OFF"

                        })

                    }
                );

                fetchIrrigationStatus();

            } catch(error){

                console.log(error);

            }

        }
    );

}
// Mode Toggle
const modeButtons =
document.querySelectorAll(".mode-btn");

modeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        modeButtons.forEach(b => {

            b.classList.remove(
                "active-mode"
            );

        });

        btn.classList.add("active-mode");

        const modeStatus =
        document.querySelector(
            ".mode-status"
        );

        modeStatus.innerText =
        btn.innerText.includes("AUTO")
        ? "AUTO"
        : "MANUAL";

    });

});

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

        console.log(data);

        // Pump Status
        if(pumpStatus){

            pumpStatus.innerText =
            data.pumpStatus;

            pumpStatus.style.color =
            data.pumpStatus === "ON"
            ? "#22c55e"
            : "#ef4444";

        }

        // Top Status
        if(pumpStatusText){

            pumpStatusText.innerText =
            data.pumpStatus;

            pumpStatusText.style.color =
            data.pumpStatus === "ON"
            ? "#22c55e"
            : "#ef4444";

        }

        // Threshold
        if(thresholdValue){

            thresholdValue.innerText =
            data.threshold + "%";

        }

        if(thresholdSlider){

            thresholdSlider.value =
            data.threshold;

        }

    } catch(error){

        console.log(error);

    }

}

fetchIrrigationStatus();

setInterval(fetchIrrigationStatus,5000);