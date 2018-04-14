class ProductOrder {
    constructor(data) {
        if (data.orderId) this.order_id = data.orderId
        this.create_date = data.createDate || ''
        this.trade_date = data.tradeDate || ''
        this.pro_price = data.proPrice || ''
        this.pro_id = data.proId || 0
        this.buy_id = data.buyId || 0
        this.sell_id = data.sellId || 0
    }

    verify() {
        return true
    }
}