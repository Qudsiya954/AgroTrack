const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    severity: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        default: "LOW"
    }

}, { timestamps: true });

module.exports =
    mongoose.model("Alert", alertSchema);