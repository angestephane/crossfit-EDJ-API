const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({
    workout: mongoose.Schema.Types.ObjectId,
    record: String,
    member: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model('Records', recordsSchema);
