const { RequestData } = require('../model/index')

const { query, insertTable } = require('../lib/mysql.js')

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
}]

const user = [{
    path: '/user/login',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body
        
    }
}, {
    path: '/user/register',
    method: 'post',
    callback: async (ctx) => {
        const userInfo = ctx.request.body
        let data
        await insertTable('user', {
            userName: userInfo.userName,
            userPass: userInfo.userPassword,
            userPhone: userInfo.userPhone,
            sex: null
        }).then(res => {
            console.log('success')
            data = new RequestData()
        }).catch(err => {
            data = new RequestData(err, 0, 'failed')
        })
        // ctx.body 不能在函数中使用，所以await异步函数，把赋值放到函数外面
        ctx.body = data
    }
}]

module.exports = [].concat(admin, user)