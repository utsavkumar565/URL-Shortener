const mongoose =require('mongoose');
const shortid = require('shortid');
const shortUrlSchema = mongoose.Schema({
    full:{
        type: String,
        require: true
    },
    short:{
        type: String,
        require: true,
        default: shortid.generate
    },
    clicks:{
        type: Number,
        require: true,
        default: 0
    }
});

module.exports = mongoose.model('ShortUrl',shortUrlSchema);
