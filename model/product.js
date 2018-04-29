class Product {
    constructor(data) {
        if (data.proId) this.pro_id = Number(data.proId)
        this.cate_id = Number(data.cateId) || 0
        this.user_id = Number(data.userId) || 0
        this.pro_title = data.proTitle || ''
        this.pro_subtitle = data.proSubtitle || ''
        this.pro_detail = data.proDetail || ''
        this.pro_img = data.proImg || ''
        this.original_price = data.originalPrice || ''
        this.current_price = data.currentPrice || ''
        this.pro_keep = data.proKeep ? 1 : 0
        this.pro_code = data.proCode || ''
        this.pro_isbuy = data.proIsBuy || 0
        this.review_status = data.review_status ? 1 : 0
    }

    verify() {
        return true
    }
}

module.exports = Product