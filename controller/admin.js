const query = require('../lib/mysql.js')

module.exports = {
    index: async (ctx) => {
        if (ctx.session.admin_user) {
            await ctx.render('backend/index/index')
        } else {
            await ctx.redirect('/admin/login')
        }

    },
    login: async (ctx) => {
        if (ctx.session.admin_user) {
            await ctx.redirect('/admin')
        }
        await ctx.render('backend/login/index')
    }
}