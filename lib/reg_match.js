const REG_MATCH = {
    userId: /^\d{5}$/g, // 5个数字
    userName: /^[^a-zA-Z0-9\_\u4e00-\u9fa5]$/g, // 下划线、数字、字母
    userPass: /^[^\s]{6,18}$/, // 6-18位、非空格
    userPhone: /^\d{11}$/g, // 11位数字
    sex: /^[0 || 1]$/g, // 0 或 1
    
    proTitle: /^.{0,20}$/g, // 20个字符以内
    proSubtitle: /^.{0,200}$/g, // 200个字符以内
    proDetail: /^.{0,500}$/g, // 500个字符以内
    originalPrice: /^\d+(\.\d{2}})?$/g, // 整数或两位小数
    currentPrice: /^\d+(\.\d{2}})?$/g, // 整数或两位小数
    proKeep: /^[0 || 1]$/g, // 0 或 1
    proCode: /^.{0, 100}$/g, // 100个字符以内
    reviewStatus: /^[0 || 1 || 2 || 3]&/g, // 0 或 1 或 2 或 3
    
    dateTime: /^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/g, // YYYY-MM-DD HH:MM:SS 日期格式
    tradeStatus: /^[0 || 1 || 2]$/g // 0 或 1 或 2
}

module.exports = REG_MATCH