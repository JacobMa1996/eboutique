const router = require('koa-router')()
const user = require('../controller/user')

router
  .get('/user', user.index)
  .get('/login', user.login)
  .get('/register', user.register)
  .get('/user/information', user.information)
  .get('/user/order', user.order)
  .get('/user/added', user.added)
  .get('/user/myadded', user.myadded)
  .get('/user/favorites', user.favorites)

  module.exports = router;