const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// router 
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const boardRouter = require('./routes/board')
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/board', boardRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {    
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: err.status,
    stack: err.stack
  });
});

// connect mongodb
const atlasUri = process.env.ATLAS_URI;
mongoose.connect(atlasUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MonogDB connection established successfully!');
});

// run server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening to port ${port}`))