const router = require('koa-router')()
const admin = require('../controller/admin')

router.prefix('/admin')

router
    .get('/', admin.index)
    .get('/login', admin.login)
    .post('/api_login', admin.api_login)

module.exports = router