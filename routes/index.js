var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res) {
  Post.find({},function (err,posts) {
    if(err){
      return res.status(500);
    }else {
      res.render('index', { isAuthed: req.isAuthenticated(),user:req.user,posts:posts});
    }
  });

});

module.exports = router;
