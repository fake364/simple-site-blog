module.exports={ logged:function (req, res, next){
    req.isAuthenticated()
        ? next()
        : res.redirect('/login');
},
notLogged:function (req, res, next){
    !req.isAuthenticated()
        ? next()
        : res.redirect('/');
}}