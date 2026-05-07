const SensorData =
require("../models/SensorData");

const Alert =
require("../models/Alert");

const getAnalytics =
async (req,res) => {

    try{

        const logs =
        await SensorData.find();

        const alerts =
        await Alert.find();

        // Totals
        const totalLogs =
        logs.length;

        const totalAlerts =
        alerts.length;

        // Averages
        const avgTemperature =
        logs.reduce(
            (sum,item)=>
            sum + item.temperature,
            0
        ) / totalLogs || 0;

        const avgHumidity =
        logs.reduce(
            (sum,item)=>
            sum + item.humidity,
            0
        ) / totalLogs || 0;

        const avgSoil =
        logs.reduce(
            (sum,item)=>
            sum + item.soilMoisture,
            0
        ) / totalLogs || 0;

        // Latest 7 readings
        const latestLogs =
        logs.slice(-7);

        res.json({

            totalLogs,

            totalAlerts,

            avgTemperature:
            avgTemperature.toFixed(1),

            avgHumidity:
            avgHumidity.toFixed(1),

            avgSoil:
            avgSoil.toFixed(1),

            latestLogs

        });

    } catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

module.exports = {

    getAnalytics

};