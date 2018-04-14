class Category {
    constructor (data) {
        this.cate_name = data.cateName || ''
        this.brand_name = data.brandName || ''
        this.brand_intro = data.brandIntro || ''
        this.is_show = data.isShow || 0
    }

    verify() {
        return true
    }
}

module.exports = Category
