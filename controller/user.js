// 个人中心 导航
const slide = [{
    name: '我的信息',
    url: '/user/information'
}, {
    name: '我的订单',
    url: '/user/order'
}, {
    name: '我的发布',
    url: '/user/added'
}]

module.exports = {
    index: async (ctx) => {
        if (ctx.session.user) {
            let content = {
                slide: slide
            }
            await ctx.render('frontend/user/index', content)
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
            let content = {
                slide: slide
            }
            await ctx.render('frontend/user/information', content)
        } else {
            await ctx.render('frontend/user/login')
        }
    },
    order: async (ctx) => {
        if (ctx.session.user) {
            let content = {
                slide: slide
            }
            await ctx.render('frontend/user/order', content)
        } else {
            await ctx.render('frontend/user/login')
        }
    },
    added: async (ctx) => {
        if (ctx.session.user) {
            let content = {
                slide: slide
            }
            await ctx.render('frontend/user/added', content)
        } else {
            await ctx.render('frontend/user/login')
        }
    }
}