const { RequestData } = require('../model/index')

const { query, queryAll, queryTable, insertTable, deleteTable } = require('../lib/mysql.js')

const ADMIN_USER = {
    userName: 'root',
    userPassword: 'admin'
}

const admin = [{
    path: '/admin/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body // bodyParser
        if (userInfo.userName === ADMIN_USER.userName && userInfo.userPassword === ADMIN_USER.userPassword) {
            // 存session
            ctx.session.admin_user = userInfo
            ctx.body = new RequestData()
        } else {
            ctx.body = new RequestData(null, 0, 'wrong userName or password')
        }
    }
}, {
    path: '/admin/getCategoryList',
    method: 'get',
    callback: async (ctx) => {
        let data
        await queryAll('category').then(res => {
            data = res
        })
        ctx.body = new RequestData(data, 0, 'success')
    }
}, {
    path: '/admin/addCategory',
    method: 'post',
    callback: async (ctx) => {
        const categoryInfo = ctx.request.body
        let data
        await insertTable('category', {
            cateName: categoryInfo.cateName,
            brandName: categoryInfo.brandName,
            brandIntro: categoryInfo.brandIntro
        }).then(res => {
            data = new RequestData(res, 0, 'success')
        }).catch(err => {
            data = new RequestData(err, 1, 'failed')
        })
        ctx.body = data
    }
}, {
    path: '/admin/deleteCategory',
    method: 'post',
    callback: async (ctx) => {
        const categoryInfo = ctx.request.body
        let data
        await deleteTable('category', {
            cateId: categoryInfo.cateId
        }).then(res => {
            data = new RequestData(res, 0, 'success')
        }).catch(err => {
            data = new RequestData(err, 1, 'failed')
        })
        ctx.body = data
    }
}]

const user = [{
    path: '/user/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body
        let data
        await queryTable('user', {
            userName: userInfo.userName
        }).then(res => {
            if (!res.length) {
                data = new RequestData(null, 1, "user doesn't exist")
            } else {
                if (userInfo.userPassword === res[0].user_pass) {
                    ctx.session.user = res[0]
                    data = new RequestData()
                } else {
                    data = new RequestData(null, 1, 'password is not correct')
                }
            }
        })
        ctx.body = data

    }
}, {
    path: '/user/register',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body
        let data
        await queryTable('user', {
            userName: userInfo.userName
        }).then(res => {
            if (!res.length) {
                insertTable('user', {
                    userName: userInfo.userName,
                    userPass: userInfo.userPassword,
                    userPhone: userInfo.userPhone,
                    sex: null
                }).then(res => {
                    data = new RequestData()
                })
            } else {
                data = new RequestData(null, 1, 'failed, this name has been registered')
            }
        }).catch(err => {
            data = new RequestData(err, 1, 'failed')
        })
        // ctx.body 不能在函数中使用，所以await异步函数，把赋值放到函数外面
        ctx.body = data
    }
}]

module.exports = [].concat(admin, user)