module.exports = {
    index: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/index')
        } else {
            ctx.redirect('/login')
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
            ctx.redirect('/login')
        }
    },
    order: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/order')
        } else {
            ctx.redirect('/login')
        }
    },
    added: async (ctx) => {
        if (ctx.session.user) {
            await ctx.render('frontend/user/added')
        } else {
            ctx.redirect('/login')
        }
    }
}