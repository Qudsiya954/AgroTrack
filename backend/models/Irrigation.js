const mongoose = require('mongoose');

const irrigationSchema = new mongoose.Schema({

    pumpStatus: {
        type: String,
        default: "OFF"
    },

    mode: {
        type: String,
        default: "AUTO"
    },

    threshold: {
        type: Number,
        default: 40
    }

}, { timestamps: true });

module.exports =
    mongoose.model("Irrigation", irrigationSchema);