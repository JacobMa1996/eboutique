const multer = require('koa-multer')
const { ResponseData, User, Category, Product, ProductOrder } = require('../model/index')
const { USER_TYPE, CATEGORY_TYPE, PRODUCT_TYPE, PRODUCTORDER_TYPE } = require('../lib/data_type')
const { query, queryAll, queryTable, insertTable, updateTable, deleteTable } = require('../lib/mysql.js')

let fileName = ''

//uopload 配置  
const storage = multer.diskStorage({
    //文件保存路径  
    destination: function (req, file, cb) {
        cb(null, 'assests/uploads/')
    },
    //修改文件名称  
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".")
        fileName = Date.now() + "." + fileFormat[fileFormat.length - 1]
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage });

const ADMIN_USER = {
    userName: 'root',
    userPassword: 'admin'
}

const common = [{
    path: '/common/getUserInfo',
    method: 'get',
    callback: async (ctx) => {
        let userInfo = ctx.session.user
        if (userInfo) {
            ctx.body = new ResponseData(userInfo, 0, 'success')
        } else {
            ctx.body = new ResponseData(null, 0, 'not login')
        }
    }
}, {
    path: '/common/upload',
    method: 'post',
    middleware: [
        upload.single('upload')
    ],
    callback: async (ctx) => {
        let data = fileName
        fileName = ''
        ctx.body = new ResponseData(data, 0, 'success')
    }
}]

const admin = [{
    path: '/admin/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body // bodyParser
        if (userInfo.userName === ADMIN_USER.userName && userInfo.userPassword === ADMIN_USER.userPassword) {
            // 存session
            ctx.session.admin_user = userInfo
            ctx.body = new ResponseData()
        } else {
            ctx.body = new ResponseData(null, 0, 'wrong userName or password')
        }
    }
}, {
    path: '/admin/getCategoryList',
    method: 'get',
    callback: async (ctx) => {
        let response
        await queryAll('category').then(res => {
            response = res
        })
        ctx.body = new ResponseData(response, 0, 'success')
    }
}, {
    path: '/admin/addCategory',
    method: 'post',
    callback: async (ctx) => {
        let categoryInfo = ctx.request.body
        let response
        let data = new Category(categoryInfo)
        await insertTable('category', data).then(res => {
            response = new ResponseData(res, 0, 'success')
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
        ctx.body = response
    }
}, {
    path: '/admin/updateCagetory',
    method: 'post',
    callback: async (ctx) => {
        const categoryInfo = ctx.request.body
        let response
        let data = new Category(categoryInfo)
        await updateTable('category', data).then(res => {
            response = new ResponseData(res, 0, 'sucess')
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
        ctx.body = response
    }
}, {
    path: '/admin/deleteCategory',
    method: 'post',
    callback: async (ctx) => {
        const categoryInfo = ctx.request.body
        let response
        let data = new Category(categoryInfo)
        await deleteTable('category', data).then(res => {
            response = new ResponseData(res, 0, 'success')
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
        ctx.body = response
    }
}]

const user = [{
    path: '/user/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body
        let response
        let data = new User(userInfo)
        await queryTable('user', data).then(res => {
            if (!res.length) {
                response = new ResponseData(null, 1, "user doesn't exist")
            } else {
                if (userInfo.userPassword === res[0].user_pass) {
                    ctx.session.user = res[0]
                    response = new ResponseData()
                } else {
                    response = new ResponseData(null, 1, 'password is not correct')
                }
            }
        })
        ctx.body = response
    }
}, {
    path: '/user/register',
    method: 'post',
    callback: async (ctx) => {
        let response
        let data = new User(userInfo)
        await queryTable('user', data).then(res => {
            if (!res.length) {
                return insertTable('user', data)
            } else {
                return Promise.reject('failed, this name has been registered')
            }
        }).then(res => {
            response = new ResponseData()
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
        // ctx.body 不能在函数中使用，所以await异步函数，把赋值放到函数外面
        ctx.body = response
    }
}]

// const getData = (type, data) => {
//     const getFormatData = (typeList, data) => {
//         let newData = {}
//         for (let item in data) {
//             newData[typeList[item]] = data[item]
//         }
//         return newData
//     }
//     let newData
//     switch (type) {
//         case 'user': {
//             newData = getFormatData(USER_TYPE, new User(data))
//             break
//         }
//         case 'category': {
//             newData = getFormatData(CATEGORY_TYPE, new Category(data))
//             break
//         }
//         case 'product': {
//             newData = getFormatData(PRODUCT_TYPE, new Product(data))
//             break
//         }
//         case 'productorder': {
//             newData = getFormatData(PRODUCTORDER_TYPE, new ProductOrder(data))
//         }
//     }
//     return newData

// }

module.exports = [].concat(common, admin, user)