const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require("passport");
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const registerRouter = require('../routes/register');
const authRouter = require('../routes/auth');
const addPostRouter = require('../routes/add_post');
const loginRouter = require('../routes/login');
const logoutRouter = require('../routes/logout');
const postRouter = require('../routes/post');
const db = require('../config/mongo');
const bodyParser = require('body-parser');
const app = express();
const profileRouter=require("../routes/profile");

module.exports=  {
    createError,
    express,
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
}