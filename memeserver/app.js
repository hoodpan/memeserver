var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var logger = require('morgan');//在控制台中，显示req请求的信息
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var mysql = require("mysql");
var routes = require('./routes/index');
var imageRouter = require('./routes/image');
const fs = require('fs');
var history = require('connect-history-api-fallback');//指定访问后端路径
var checkRouter = require('./routes/check');
var ejs = require('ejs');






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//载入中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));   //设置静态文件目录

//在路由配置前
app.all('*', function (req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许源访问，前端访问路径为“http://localhost:8080”
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  //res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Content-Type", "text/html;charset=utf-8");
  res.header("X-Powered-By", '4.16.4');
  next();
});

//配置路由
routes(app);
app.use('/image', imageRouter);
app.use('/check', checkRouter);


/*
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B-b!')
})
*/


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
