const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, (username, password, done) => {
    Users.findOne({ username })
        .then((user) => {
            if(!user || !user.validatePassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } });
            }

            return done(null, user);
        }).catch(done);
}));
passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});