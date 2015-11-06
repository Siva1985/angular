'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');




var routes = require('./server/routes/indexRouter');
var home = require('./server/routes/homeRouter');
var crud = require('./server/routes/CrudRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'Client'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/Client/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'Client')));

app.use('/', routes);
app.use('/crud', crud);
app.use('/home', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('errors_403', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('errors_403', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
