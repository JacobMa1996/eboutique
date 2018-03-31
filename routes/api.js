const router = require('koa-router')()
const apiList = require('../controller/api')

router.prefix('/api')

apiList.forEach(item => {
    router[item.method || 'get'].call(router, item.path, item.callback)
})

module.exports = router
