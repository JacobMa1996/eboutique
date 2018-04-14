class Category {
    constructor (data) {
        if (data.cateId) this.cate_id = data.cateId
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
