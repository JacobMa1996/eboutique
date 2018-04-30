const multer = require('koa-multer')
const { ResponseData, User, Category, Product, ProductOrder } = require('../model/index')
const { USER_TYPE, CATEGORY_TYPE, PRODUCT_TYPE, PRODUCTORDER_TYPE } = require('../lib/data_type')
const { query, queryAll, queryTable, insertTable, updateTable, deleteTable, queryProByCateId, queryOrderByUserId } = require('../lib/mysql.js')

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
    userPass: 'admin'
}

const common = [{
    path: '/common/getUserInfo',
    method: 'get',
    callback: async (ctx) => {
        let userInfo = ctx.session.user
        let response
        if (userInfo) {
            await queryTable('user', new User({userId: userInfo.user_id})).then(res => {
                if (res && res.length) {
                    ctx.session.user = res[0]
                    response = new ResponseData(res[0], 0, 'sucess')
                } else {
                    ctx.session.user = null
                    response = new ResponseData(res[0], 1, 'failed')
                }
            })
        } else {
            response = new ResponseData(null, 0, 'not login')
        }
        ctx.body = response
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
}, {
    path: '/common/logOut',
    method: 'get',
    callback: async (ctx) => {
        ctx.session.user = null
        ctx.body = new ResponseData()
    }
}]

const admin = [{
    path: '/admin/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body // bodyParser
        if (userInfo.userName === ADMIN_USER.userName && userInfo.userPass === ADMIN_USER.userPass) {
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
                if (userInfo.userPass === res[0].user_pass) {
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
        let userInfo = ctx.request.body
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
}, {
    path: '/user/updateUser',
    method: 'post',
    callback: async (ctx) => {
        let userInfo = ctx.request.body
        let response
        let data = new User(userInfo)
        for (let key in data) {
            if (!data[key]) {
                delete data[key]
            }
        }
        await updateTable('user', data).then(res => {
            response = new ResponseData(res, 0, 'success')
        }).catch(err => {
            console.log(err)
            response = new ResponseData(err, 1, 'failed')
        })
        ctx.body = response
    }
}, {
    path: '/addProduct',
    method: 'post',
    callback: async (ctx) => {
        let response
        let productInfo = ctx.request.body
        let data = new Product(productInfo)
        await insertTable('product', data).then(res => {
            response = new ResponseData(res, 0, 'success')
        }).catch(err => {
            console.log(err)
            response = new ResponseData(err, 1, 'failed')
        })
        ctx.body = response
    }
}, {
    path: '/getProductList',
    method: 'post',
    callback: async (ctx) => {
        let response
        let category = ctx.request.body
        let data = new Category(category)
        let productList = []
        let userList = []
        await queryProByCateId(data).then(res => {
            productList = res
        }).catch(err => {
            console.log(err)
            response = new ResponseData(err, 1, 'failed')
        })

        for (let pro of productList) {
            if (userList.map(user => user.user_id).indexOf(pro.user_id) === -1) {
                await queryTable('user', new User({ userId: pro.user_id })).then(res => {
                    userList.push(res[0])
                    pro = Object.assign(pro, res[0])
                }).catch(err => {
                    response = new ResponseData(err, 1, 'failed')
                })
            } else {
                userList.forEach(user => {
                    if (user.user_id === pro.user_id) {
                        pro = Object.assign(pro, user)
                    }
                })
            }
        }
        response = new ResponseData(productList, 0, 'success')
        ctx.body = response
    }
}, {
    path: '/getProductDetail',
    method: 'post',
    callback: async (ctx) => {
        let response
        let productInfo = ctx.request.body
        let userId
        let cateId
        let productDetail = {}
        await queryTable('product', new Product(productInfo)).then(res => {
            userId = res[0].user_id
            cateId = res[0].cate_id
            productDetail = res[0]
        }).catch(err => {
            console.log(err)
            response = new ResponseData(err, 1, 'faild')
        })

        await queryTable('user', new User({ userId: userId })).then(res => {
            productDetail = Object.assign(productDetail, res[0])
        }).catch(err => {
            console.log(err)
            response = new ResponseData(err, 1, 'failed')
        })

        await queryTable('category', new Category({ cateId: cateId })).then(res => {
            productDetail = Object.assign(productDetail, res[0])
            response = new ResponseData(productDetail, 0, 'success')
        })
        ctx.body = response
    }
}, {
    path: '/getOrdersByUserId',
    method: 'post',
    callback: async (ctx) => {
        let requestInfo = ctx.request.body
        let response
        let orderList = []
        let data = new ProductOrder(requestInfo)
        await queryOrderByUserId(data).then(res => {
            orderList = res
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
        if (orderList && orderList.length) {
            for (let i = 0; i < orderList.length; i++) {
                await queryTable('product', new Product({proId: orderList[i].pro_id})).then(pro => {
                    orderList[i].pro_img = pro[0].pro_img
                    orderList[i].pro_title = pro[0].pro_title
                    orderList[i].original_price = pro[0].original_price
                }).catch(err => {
                    response = new ResponseData(err, 1, 'failed')
                })
            }
        }
        response = new ResponseData(orderList, 0, 'success')

        ctx.body = response
    }
}, {
    path: '/productBuy',
    method: 'post',
    callback: async (ctx) => {
        let requestInfo = ctx.request.body
        let response
        let data = {
            proId: requestInfo.proId,
            buyId: requestInfo.buyId,
            sellId: requestInfo.sellId
        }
        // 如果未登录
        if (!data.buyId) {
            return ctx.body = new ResponseData('购买失败，未登录', 1, 'failed')
        }
        await queryTable('product', new Product({ proId: data.proId })).then(res => {
            if (res.length) {
                if (res[0].pro_isbuy) { // 如果已经被购买了
                    return Promise.reject('failed, this product has sold out! ')
                } else {
                    data.proPrice = res[0].current_price
                    return insertTable('productorder', new ProductOrder(data))
                }
            } else {
                return Promise.reject('failed, this product isn\'t exist! ')
            }
        }).then(res => { // 购买成功，改变购买状态
            return updateTable('product', {
                pro_id: data.proId,
                pro_isbuy: 1
            })
        }).then(res => {
            response = new ResponseData(res, 0, 'success')
        }).catch(err => {
            response = new ResponseData(err, 1, 'failed')
        })
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