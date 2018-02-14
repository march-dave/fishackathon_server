'use strict';

var mongoose = require('mongoose');

var FishBase = mongoose.model('fisHackathonDB', {
    imageurl: String,
    like: String,
    dislike: String,
    info: String
});

module.exports = FishBase;