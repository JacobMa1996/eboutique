const router = require('koa-router')()

const home = require('../controller/home')

router
  .get('/', home.index)

module.exports = router
