
const {
    createError, express,
    path,
    cookieParser,
    logger,
    session,
    passport,
    indexRouter,
    usersRouter,
    registerRouter,
    authRouter,
    addPostRouter,
    loginRouter,
    logoutRouter,
    postRouter,
    db,
    bodyParser,
    app,
    profileRouter
} = require('./script/apploader');

require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(session({secret: 'SECRET'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(passport.initialize());
app.use(passport.session());
//


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/add_post', addPostRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/post', postRouter);
app.use('/profile',profileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
