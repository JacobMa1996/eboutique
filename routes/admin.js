const router = require('koa-router')()
const admin = require('../controller/admin')

router.prefix('/admin')

router
    .get('/', admin.index)

module.exports = router