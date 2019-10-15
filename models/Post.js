const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const PostSchema = new Schema({
    postid:Number,
    title: String,
    text: String,
    author: String,
    comments:Array
});
module.exports=mongoose.model('Post', PostSchema);