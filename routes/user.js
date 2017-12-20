const router = require('koa-router')()
const user = require('../controller/user')
router.prefix('/users')

router
  .get('/', user.index)
  .get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
  })
  .get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })

  module.exports = router;