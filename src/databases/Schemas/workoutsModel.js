const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: String,
    mode: String,
    equipement: [String],
    exercices: [String],
    astuces: [String],
}, {timestamps: true})


module.exports = mongoose.model('Workout', workoutSchema);
