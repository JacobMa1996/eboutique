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
    },
    information: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/information')
        } else {
            await ctx.render('frontend/user/login')
        }
    },
    order: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/order')
        } else {
            await ctx.render('frontend/user/login')
        }
    },
    added: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/added')
        } else {
            await ctx.render('frontend/user/login')
        }
    }
}