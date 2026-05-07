const Alert =
    require('../models/Alert');

// GET ALERTS
exports.getAlerts =
async (req, res) => {

    try {

        const alerts =
            await Alert.find()
            .sort({ createdAt: -1 });

        res.json(alerts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ADD ALERT
exports.addAlert =
async (req, res) => {

    try {

        const {
            type,
            message,
            severity
        } = req.body;

        const alert =
            new Alert({
                type,
                message,
                severity
            });

        await alert.save();

        res.status(201).json({
            message:
            "Alert added successfully",
            alert
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// CLEAR ALERTS
exports.clearAlerts =
async (req, res) => {

    try {

        await Alert.deleteMany();

        res.json({
            message:
            "All alerts cleared"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};