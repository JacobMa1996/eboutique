const ADMIN_USER = {
    userName: 'root',
    userPassword: 'admin'
}

module.exports = {
    index: async (ctx) => {
        await ctx.render('backend/index/index')
    },
    login: async (ctx) => {
        await ctx.render('backend/login/index')
    },
    api_login: async (ctx) => {
        const userInfo = ctx.request.body // bodyParser
        if (userInfo.userName === ADMIN_USER.userName && userInfo.userPassword === ADMIN_USER.userPassword) {
            // 存session
            ctx.session.user = userInfo
            ctx.body = {
                data: '1', 
                status: '0',
                message: 'success'
            }
        } else {
            ctx.body = {
                data: '0', 
                status: '1', 
                message: 'wrong userName or passwowrd'
            }
        }
    }
}