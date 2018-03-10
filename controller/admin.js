module.exports = {
    index: async (ctx) => {
        await ctx.render('backend/index/index')
    }, 
    login: async (ctx) => {
        await ctx.render('backend/login/index')
    }, 
    api_login: async (ctx) => {
        console.log(1)
        ctx.body = ctx.request
    }
}