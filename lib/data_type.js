const USER_TYPE = {
    'user_id': 'userId',
    'user_name': 'userName',
    'user_pass': 'userPass',
    'user_phone': 'userPhone',
    'user_img': 'userImg',
    'sex': 'sex',
    'favorites': 'favorites',
    'added': 'added',
    'carts': 'carts'
}

const CATEGORY_TYPE = {
    'cate_id': 'cateId',
    'cate_name': 'cateName',
    'brand_name': 'brandName',
    'brand_intro': 'brandIntro',
    'is_show': 'isShow'
}

const PRODUCT_TYPE = {
    'pro_id': 'proId',
    'cate_id': 'cateId',
    'pro_title': 'proTitle',
    'pro_subtitle': 'proSubtitle',
    'pro_detail': 'proDetail',
    'pro_img': 'proImg',
    'origin_price': 'originPrice',
    'current_price': 'currentPrice',
    'pro_keep': 'proKeep',
    'pro_code': 'proCode',
    'review_status': 'reviewStatus'
}

const PRODUCTORDER_TYPE = {
    'order_id': 'orderId',
    'create_date': 'createDate',
    'trade_date': 'tradeDate',
    'pro_price': 'proPrice',
    'pro_id': 'proId',
    'buy_id': 'buyId',
    'sell_id': 'sellId',
    'trade_status': 'tradeStatus'
}

module.exports = {
    USER_TYPE: USER_TYPE,
    CATEGORY_TYPE: CATEGORY_TYPE,
    PRODUCT_TYPE: PRODUCT_TYPE,
    PRODUCTORDER_TYPE: PRODUCTORDER_TYPE
}