class Product {
    constructor(data) {
        if (data.pro_id) this.pro_id = data.pro_id
        this.cate_id = data.cate_id || 0
        this.pro_title = data.proTitle || ''
        this.pro_subtitle = data.proSubtitle || ''
        this.pro_detail = data.proDetail || ''
        this.pro_img = data.proImg || ''
        this.origin_price = data.originPrice || ''
        this.current_price = data.currentPrice || ''
        this.pro_keep = data.proKeep || ''
        this.pro_code = data.proCode || ''
        this.review_status = data.review_status || 0
    }

    verify() {
        return true
    }
}