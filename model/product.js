class Product {
    constructor(data) {
        if (data.pro_id) this.pro_id = data.pro_id
        this.cate_id = data.cateId || 0
        this.pro_title = data.proTitle || ''
        this.pro_subtitle = data.proSubtitle || ''
        this.pro_detail = data.proDetail || ''
        this.pro_img = data.proImg || ''
        this.original_price = data.originalPrice || ''
        this.current_price = data.currentPrice || ''
        this.pro_keep = data.proKeep ? 1 : 0
        this.pro_code = data.proCode || ''
        this.review_status = data.review_status ? 1 : 0
    }

    verify() {
        return true
    }
}

module.exports = Product