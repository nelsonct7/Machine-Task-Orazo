const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const helmet = require("helmet");
const connectDb=require('./config/connection')
require('dotenv').config()


const adminRouter = require('./routes/admin');
const userRouter=require('./routes/user')

connectDb()
const app = express();
app.use(cookieParser());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors({
  origin: ['http://localhost:3000']
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const allowedMethods = ['GET', 'HEAD', 'POST']//to block certain api methods
app.use((req, res, next) => {
  if (!allowedMethods.includes(req.method)){
    return res.status(401).send('Method Not Allowed')
  } 
  return next()
})

app.use('/admin', adminRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error message
  res.status(err.status || 500);
  res.json({msg:"Invalid Router"})
});

module.exports = app;
