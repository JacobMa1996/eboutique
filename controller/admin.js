const Data = require('../model/Data')

const query = require('../lib/mysql.js')

const ADMIN_USER = {
    userName: 'root',
    userPassword: 'admin'
}

module.exports = {
    index: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('backend/index/index')
        } else {
            await ctx.redirect('/admin/login')
        }

    },
    login: async (ctx) => {
        if(ctx.session.user) {
            await ctx.redirect('/admin')
        }
        await ctx.render('backend/login/index')
    },
    api_login: async (ctx) => {
        const userInfo = ctx.request.body // bodyParser
        if (userInfo.userName === ADMIN_USER.userName && userInfo.userPassword === ADMIN_USER.userPassword) {
            // 存session
            ctx.session.user = userInfo
            ctx.body = new Data()
        } else {
            ctx.body = new Data(null, 0, 'wrong userName or password')
        }
    }
}