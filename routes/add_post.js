var express = require('express');
var router = express.Router();
const passport = require('passport');
const loader=require('../script/usloader');
const Post = require('../models/Post');

/* GET home page. */
router.get('/', loader.logged, function (req, res,next) {
        res.render("add_post",{err:""});
    });
router.post('/', loader.logged, function (req, res,next) {
    const {body: {title, text}} = req;
    console.log(req.body);
    if (!title) {
        return res.status(422).json({
            errors: {
                title: 'is required',
            },
        });
    }

    if (!text) {
        return res.status(422).json({
            errors: {
                text: 'is required',
            },
        });
    }
    const finalPost = new Post({title: title, text: text,author:req.user.username});

    return finalPost.save()
        .then(() => {
                    res.redirect("/");
        });
});

module.exports = router;