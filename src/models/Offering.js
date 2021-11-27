const { Schema, model } = require('mongoose');

const OfferingSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
        require: true
    },
    amount:{
        type: Number,
        require: true
    }
});

module.exports = model('Offering', OfferingSchema);