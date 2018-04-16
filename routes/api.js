const router = require('koa-router')()
const apiList = require('../controller/api')
const multer = require('koa-multer')

const middleware = async (ctx, next) => {
    await next()
}

router.prefix('/api')

// let fileName = ''

// //uopload 配置  
// const storage = multer.diskStorage({
//     //文件保存路径  
//     destination: function (req, file, cb) {
//         cb(null, 'assests/uploads/')
//     },
//     //修改文件名称  
//     filename: function (req, file, cb) {
//         let fileFormat = (file.originalname).split(".")
//         fileName = Date.now() + "." + fileFormat[fileFormat.length - 1]
//         cb(null, fileName)
//     }
// })

// const upload = multer({ storage: storage });


apiList.forEach(item => {
    if (item.middleware && item.middleware.length) {
        router[item.method || 'get'].call(router, item.path, ...item.middleware, item.callback)
    }
    router[item.method || 'get'].call(router, item.path, item.callback)
})

// router.post('/common/upload', upload.single('upload'), (ctx, next) => {
//     console.log(fileName)
// })


module.exports = router
