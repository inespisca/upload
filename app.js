const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

/* What's below was added because of the quest */



/* What's below this came with the generator */

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* What's below was added because of the quest */



function fileFilter (req, file, cb) {
 
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
 
  // To reject this file pass `false`, like so:
  cb(null, false)
 
  // To accept the file pass `true`, like so:
  cb(null, true)
 
  // You can always pass an error if something goes wrong:
  cb(new Error("Look at what you've done! Did you just get an error? This marvelous uploader could never get an error!"))
 
}

/* This is just here to work */

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
 });

module.exports = app;
