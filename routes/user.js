const router = require('koa-router')()
const user = require('../controller/user')

router
  .get('/user', user.index)
  .get('/login', user.login)
  .get('/register', user.register)

  module.exports = router;