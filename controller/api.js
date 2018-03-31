const { RequestData } = require('../model/index')

const query = require('../lib/mysql.js')

const ADMIN_USER = {
    userName: 'root',
    userPassword: 'admin'
}

const admin = [{
    path: '/login',
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

module.exports = [].concat(admin)