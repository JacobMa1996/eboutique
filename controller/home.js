module.exports = {
    index: async (ctx) => {
        // await ctx.render('frontend/home/index')
        await ctx.redirect('/category')
    }
}