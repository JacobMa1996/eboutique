class ProductOrder {
    constructor(data) {
        if (data.orderId) this.order_id = data.orderId
        this.create_date = data.createDate || this.getFormatDateNow()
        this.trade_date = data.tradeStatus || this.getFormatDateNow()
        this.pro_price = data.proPrice || '0'
        this.pro_id = data.proId || 0
        this.buy_id = data.buyId || 0
        this.sell_id = data.sellId || 0
        this.trade_status = data.tradeStatus || 0 // 0 待审核 1 审核中 2 审核失败 3 审核成功
    }

    verify() {
        return true
    }

    getFormatDateNow() {
        let date = new Date()
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minutes = date.getMinutes(),
            second = date.getSeconds()

        month = month > 9 ? month.toString() : `0${month}`
        day = day > 9 ? day.toString() : `0${day}`
        hour = hour > 9 ? hour.toString() : `0${hour}`
        minutes = minutes > 9 ? minutes.toString() : `0${minutes}`
        second = second > 9 ? second.toString() : `0${second}`

        return `${year}/${month}/${day} ${hour}/${minutes}/${second}`
    }
}

module.exports = ProductOrder