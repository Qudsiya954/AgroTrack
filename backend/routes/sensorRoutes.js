const express = require('express');
const router = express.Router();

const {
  addSensorData,
  getLatestData,
  getAllLogs,
} = require('../controllers/sensorController');

router.post('/add', addSensorData);
router.get('/latest', getLatestData);
router.get('/logs', getAllLogs);

module.exports = router;