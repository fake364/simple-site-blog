var express = require('express');
var router = express.Router();
const loader = require('../script/usloader');
var Post = require('../models/Post');

router.get('/:id', function (req, res) {
    Post.find({}, function (err, post) {
        if (err) {
            return res.status(500);
        } else {
            res.render('post_detail', {id: req.params.id, post: post[req.params.id], isAuthed: req.isAuthenticated()});
        }
    });
});
router.post('/:id/comment',loader.logged, function (req, res) {
    const {body:{text}}=req;
    console.log(req.body);
    Post.find({}, function (err, post) {
        if (err) {
            return res.status(500);
        } else {
            post[req.params.id].comments=[...post[req.params.id].comments,{text:text,author:req.user.username}]
            post[req.params.id].save().then(()=>{
                res.redirect('./');
            })
        }
    });
});

module.exports = router;