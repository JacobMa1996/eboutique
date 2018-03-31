const router = require('koa-router')()
const admin = require('../controller/admin')

router.prefix('/admin')

router
    .get('/', admin.index)
    .get('/login', admin.login)

module.exports = router