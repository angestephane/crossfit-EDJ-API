const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    genre: String,
    birthday: String,
    email: String,
    hash: String,
})
module.exports = mongoose.model('Member', memberSchema)
