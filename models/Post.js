const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    desciption: String,
    data: String
})

module.exports = mongoose.model('Posts', PostSchema)