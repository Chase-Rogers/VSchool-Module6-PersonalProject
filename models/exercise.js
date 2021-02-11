const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
    },
    section: {
        type: String,
    },
    equipment: {
        type: Array,
        default: [],
    },
    muscles: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
