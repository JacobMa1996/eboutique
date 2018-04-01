module.exports = {
    index: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/index')
        } else {
            await ctx.render('frontend/user/login')
        }
    },
    login: async (ctx) => {
        if (ctx.session.user) {
            ctx.redirect('/category')
        }
        await ctx.render('frontend/user/login')
    },
    register: async (ctx) => {
        await ctx.render('frontend/user/register')
    }
}