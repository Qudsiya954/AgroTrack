const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },

  humidity: {
    type: Number,
    required: true,
  },

  soilMoisture: {
    type: Number,
    required: true,
  },

  lightIntensity: {
    type: Number,
    required: true,
  },

  irrigationStatus: {
    type: String,
    default: 'OFF',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SensorData', sensorSchema);