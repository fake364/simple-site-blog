var express = require('express');
var router = express.Router();
const loader=require('../script/usloader');

router.get('/',loader.notLogged, function(req, res) {
    res.render('login',{err:""});
});

module.exports = router;