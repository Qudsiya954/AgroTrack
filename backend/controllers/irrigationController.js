const Irrigation =
    require('../models/Irrigation');

// GET STATUS
exports.getIrrigationStatus =
async (req, res) => {

    try {

        let data =
            await Irrigation.findOne();

        // Create default if empty
        if (!data) {

            data = await Irrigation.create({
                pumpStatus: "OFF",
                mode: "AUTO",
                threshold: 40
            });

        }

        res.json(data);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UPDATE STATUS
exports.updateIrrigation =
async (req, res) => {

    try {

        const {
            pumpStatus,
            mode,
            threshold
        } = req.body;

        let data =
            await Irrigation.findOne();

        if (!data) {

            data = new Irrigation();

        }

        if (pumpStatus)
            data.pumpStatus = pumpStatus;

        if (mode)
            data.mode = mode;

        if (threshold !== undefined)
            data.threshold = threshold;

        await data.save();

        res.json({
            message:
            "Irrigation updated successfully",
            data
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};