const SensorData = require('../models/SensorData');

// Add Sensor Data
const addSensorData = async (req, res) => {
  try {
    const newData = new SensorData(req.body);
    await newData.save();

    res.status(201).json({
      success: true,
      message: 'Sensor data added',
      data: newData,
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