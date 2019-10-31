const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    text: String,
    author: String,
});
module.exports=mongoose.model('Post', CommentSchema);