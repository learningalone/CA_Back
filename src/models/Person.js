const { Schema, model } = require('mongoose');

const TitheSchema = new Schema({
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

const PersonSchema = new Schema({
    id_type:{
        type: String,
        require: true
    },
    id_num:{
        type: String,
        require: true,
        // index: true,
        unique: true
    },
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    phone_1:{
        type: String,
        require: true
    },
    phone_2:{
        type: String,
    },
    address:{
        type: String,
        require: true
    },
    // 'birthday': date_type

    // creo que seria
    /* tithes:{
        type: [TitheSchema]
    } */
});

module.exports = model('Person',PersonSchema);