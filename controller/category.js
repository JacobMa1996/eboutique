let { Category } = require('../model/index')

let content = {}

module.exports = {
    index: async (ctx) => {
        let categoryList = []
        categoryList.push({ categoryId: 01, categoryName: 'Louis Vuitton' })
        // console.log(categoryList)
        content = {
            search: true,
            category: categoryList
        }
        await ctx.render('frontend/category/index', content)
    }
}

