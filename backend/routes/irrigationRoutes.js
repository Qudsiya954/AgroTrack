const express = require('express');

const router = express.Router();

const {
    getIrrigationStatus,
    updateIrrigation
} = require('../controllers/irrigationController');

const authMiddleware =
    require('../middleware/authMiddleware');

// GET
router.get(
    '/status',
    authMiddleware,
    getIrrigationStatus
);

// UPDATE
router.post(
    '/update',
    authMiddleware,
    updateIrrigation
);

module.exports = router;