const SensorData = require('../models/SensorData');
const Alert = require('../models/Alert');

// =========================
// ADD SENSOR DATA
// =========================

const addSensorData = async (req, res) => {

  try {

    const {
      temperature,
      humidity,
      soilMoisture,
      lightIntensity,
      irrigationStatus
    } = req.body;

    // =========================
    // SENSOR SPOOFING DETECTION
    // =========================

    // Invalid Temperature
    if (
      temperature < -10 ||
      temperature > 60
    ) {

      await Alert.create({

        type:
          "SENSOR SPOOFING DETECTED",

        message:
          "Abnormal temperature value received",

        severity:
          "HIGH"

      });

      return res.status(400).json({

        success: false,

        message:
          "Fake temperature data detected"

      });

    }

    // Invalid Humidity
    if (
      humidity < 0 ||
      humidity > 100
    ) {

      await Alert.create({

        type:
          "SENSOR SPOOFING DETECTED",

        message:
          "Abnormal humidity value received",

        severity:
          "HIGH"

      });

      return res.status(400).json({

        success: false,

        message:
          "Fake humidity data detected"

      });

    }

    // Invalid Soil Moisture
    if (
      soilMoisture < 0 ||
      soilMoisture > 100
    ) {

      await Alert.create({

        type:
          "SENSOR SPOOFING DETECTED",

        message:
          "Abnormal soil moisture detected",

        severity:
          "HIGH"

      });

      return res.status(400).json({

        success: false,

        message:
          "Fake soil moisture detected"

      });

    }

    // =========================
    // SAVE SENSOR DATA
    // =========================

    const newData = new SensorData({

      temperature,
      humidity,
      soilMoisture,
      lightIntensity,
      irrigationStatus

    });

    await newData.save();

    // =========================
    // ENVIRONMENTAL ALERTS
    // =========================

    // Low Soil Moisture
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

    // High Temperature
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

    // =========================
    // RESPONSE
    // =========================

    res.status(201).json({

      success: true,

      data: newData

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// =========================
// GET LATEST SENSOR DATA
// =========================

const getLatestData = async (req, res) => {

  try {

    const latestData =
      await SensorData.findOne()
        .sort({ createdAt: -1 });

    res.status(200).json(latestData);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// =========================
// GET ALL LOGS
// =========================

const getAllLogs = async (req, res) => {

  try {

    const logs =
      await SensorData.find()
        .sort({ createdAt: -1 });

    res.status(200).json(logs);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

module.exports = {

  addSensorData,
  getLatestData,
  getAllLogs,

};