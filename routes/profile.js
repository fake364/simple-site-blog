var express = require('express');
var router = express.Router();
var User = require('../models/Users');

router.get('/:user', function(req, res) {
    User.findOne({username:req.params.user},function (err,user) {
        if (err) {
            return res.res("kek");
        } else {
            res.render('profile', {user:user});
        }
    })
});

module.exports = router;