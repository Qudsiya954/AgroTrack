const SensorData = require('../models/SensorData');
const Alert = require('../models/Alert');

// Add Sensor Data
const addSensorData = async (req, res) => {
  try {
    const newData =
      new SensorData(req.body);

    await newData.save();

    // =========================
    // ALERT LOGIC
    // =========================

    const {
      temperature,
      soilMoisture
    } = req.body;

    // LOW SOIL ALERT
    if (soilMoisture < 40) {

      await Alert.create({

        type:
          "LOW SOIL MOISTURE",

        message:
          "Soil moisture below safe threshold",

        severity:
          "HIGH"

      });

    }

    // HIGH TEMPERATURE ALERT
    if (temperature > 35) {

      await Alert.create({

        type:
          "HIGH TEMPERATURE",

        message:
          "Temperature exceeded safe range",

        severity:
          "MEDIUM"

      });

    }

    res.status(201).json({
      success: true,
      data: newData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
    }
  };

  // Get Latest Sensor Data
  const getLatestData = async (req, res) => {
    try {
      const latestData = await SensorData.findOne().sort({ createdAt: -1 });

      res.status(200).json(latestData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Get All Logs
  const getAllLogs = async (req, res) => {
    try {
      const logs = await SensorData.find().sort({ createdAt: -1 });

      res.status(200).json(logs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    addSensorData,
    getLatestData,
    getAllLogs,
  };