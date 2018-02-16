var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
    siteId: {
        type: String
    },
    name: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: String
    },
    size: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: String,
        required: true
    }
});

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;