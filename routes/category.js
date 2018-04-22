const router = require('koa-router')()
const category = require('../controller/category')
router.prefix('/category')

router
  .get('/', category.index)
  .get('/product', category.product)
  
module.exports = router
