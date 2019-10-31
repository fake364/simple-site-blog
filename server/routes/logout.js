var express = require('express');
var router = express.Router();
const loader=require('../script/usloader');

router.get('/', function(req, res) {
    req.logOut();
    res.redirect("/");
});

module.exports = router;