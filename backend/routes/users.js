var router = require('express').Router();
var User = require('../models/user.model');

/* User CRUD */

// GET users list
router.get('/', (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE user
router.post('/add', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const admin = req.body.admin;

  const newUser = new User({ username, password, admin });
  newUser.save()
    .then(() => res.json({ success: true, message: 'User added!' }))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET user
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

//  DELETE user
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true, message: 'User deleted!' }))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE user
router.post('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.admin = req.body.admin;

      user.save()
        .then(() => res.json({ success: true, message: 'User updated!' }))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;