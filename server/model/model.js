const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    recette : {
        type: String,
        required: true,
        unique: true
    },
    taste : String,
    status : String
})

const fooddb = mongoose.model('fooddb', schema);

module.exports = fooddb;