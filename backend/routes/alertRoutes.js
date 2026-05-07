const express = require('express');

const router = express.Router();

const {
    getAlerts,
    addAlert,
    clearAlerts
} = require('../controllers/alertController');

const authMiddleware =
    require('../middleware/authMiddleware');

// GET ALERTS
router.get(
    '/',
    authMiddleware,
    getAlerts
);

// ADD ALERT
router.post(
    '/add',
    authMiddleware,
    addAlert
);

// CLEAR ALERTS
router.delete(
    '/clear',
    authMiddleware,
    clearAlerts
);

module.exports = router;