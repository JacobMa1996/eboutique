const router = require('koa-router')()

const home = require('../controller/home')

router
  .get('/', home.index)
  .get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
  })
  .get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })

module.exports = router
