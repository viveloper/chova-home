const router = require('express').Router()
var User = require('../models/user.model')

router.get('/', (req, res) => {
  res.json({
    title: 'auth',
    desc: 'hello auth'
  })
})

router.post('/signin', (req, res) => {

  User.findOne({ username: req.body.username }, function (err, user) {
    if (user) {
      if (user.password === req.body.password) {
        return res.json({
          success: true,
          username: user.username,
          token: 'aljsdflajslkfjlsaf',
          message: 'login success!'
        })
      }
      else {        
        // wrong password.
        return res.status(401).json({
          success: false,
          username: '',
          token: '',
          message: 'wrong password.'
        })        
      }
    }
    else {
      // User does not exist.
      return res.status(401).json({
        success: false,
        username: '',
        token: '',
        message: 'User does not exist.'
      })
    }
  });  
})

module.exports = router;