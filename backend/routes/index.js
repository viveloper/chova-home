const router = require('express').Router()

router.get('/', (req, res) => {  
  res.json({
    title: 'index',
    desc: 'hello world'
  })
})

module.exports = router;