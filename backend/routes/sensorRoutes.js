const express = require('express');
const router = express.Router();
const requestValidator =require("../middleware/requestValidator");
const replayProtection =require("../middleware/replayProtection");

const {
  addSensorData,
  getLatestData,
  getAllLogs,
} = require('../controllers/sensorController');

const authMiddleware = require('../middleware/authMiddleware');

// Protected Routes
router.post(
  '/add',
  requestValidator,
  replayProtection,
  addSensorData
);
router.get('/latest', authMiddleware, getLatestData);
router.get('/logs', authMiddleware, getAllLogs);

module.exports = router;