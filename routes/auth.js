const passport = require('passport');
const router = require('express').Router();
const Users = require('../models/Users');

router.post('/', async (req, res, next) => {
    const {body: {username, password}} = req;
    if (await Users.exists({username: username})) {
        return res.status(404).render('register', {err: "This username is already exists"});
    }
    if (!username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if (!password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }
    const finalUser = new Users({username: username, password: password});

    finalUser.setPassword(password);

    return finalUser.save()
        .then(() => {
            req.logIn(finalUser, function (err) {
                if (err) {
                    next(err);
                } else {
                    res.redirect("/");
                }
            });
        });
});
//POST login route (optional, everyone has access)
router.post('/login', (req, res, next) => {
    const {body: {username, password}} = req;

    if (!username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if (!password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    passport.authenticate('local', (err, passportUser, info) => {
        if (err) {
            return next(err);
        }
        if (passportUser) {
            const user = passportUser;

            req.logIn(user, function (err) {
                if (err) {
                    next(err);
                } else {
                    res.redirect("/");
                }
            });
        }

        return res.status(400).render('login', {err: "Incorrect login or password"});
    })(req, res, next);
});


module.exports = router;