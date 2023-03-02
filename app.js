var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// var jwt=require('./jwt')
var sequelize=require('./database/sequelizeDB')
// var login= require('./businessLogic/loginService')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apirouter = require('./routes/apiroutes')
// var seqrouter = require('./routes/sequelizeroute')
// var loginrouter= require('./routes/loginapi')
var mysqllogin= require('./routes/mysqlloginapi')
var server= require('./routes/serverroute')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data',apirouter)
// app.use('/sequel',seqrouter)
// app.use('/login',loginrouter)
app.use('/login',mysqllogin)
app.use('/server',server)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
