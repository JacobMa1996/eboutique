const router = require('koa-router')()
const user = require('../controller/user')
router.prefix('/user')

router
  .get('/', user.index)

  module.exports = router;