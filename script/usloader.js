module.exports={ logged:function (req, res, next){
    req.isAuthenticated()
        ? next()
        : res.redirect('/');
},
notLogged:function (req, res, next){
    !req.isAuthenticated()
        ? next()
        : res.redirect('/');
}}