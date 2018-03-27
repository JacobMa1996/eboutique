/**
 * 增删改查
 */

module.exports = {
    /* sql 建表 */
    CREATE_USER: `create table if not exists user(
        user_id INT(5) NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(100) NOT NULL,
        user_pass VARCHAR(40) NOT NULL,
        user_phone VARCHAR(20) NOT NULL,
        sex TINYINT NOT NULL,
        PRIMARY KEY (user_id)
    );`,
    CREATE_PRODUCT: `create table if not exists product(
        pro_id INT(5) NOT NULL AUTO_INCREMENT,
        pro_title VARCHAR(100) NOT NULL,
        pro_subtitle VARCHAR(200) NOT NULL,
        pro_detail VARCHAR(500) NOT NULL,
        original_price DOUBLE NOT NULL DEFAULT 0,
        current_price DOUBLE NOT NULL DEFAULT 0,
        pro_keep TINYINT NOT NULL,
        pro_code VARCHAR(100) NOT NULL,
        review_status TINYINT NOT NULL,
        PRIMARY KEY (pro_id)
    );`,
    CREATE_ORDER: `create table if not exists productorder(
        order_id INT(5) NOT NULL AUTO_INCREMENT,
        create_date DATE NOT NULL,
        trade_date DATE NOT NULL,
        pro_price DOUBLE NOT NULL DEFAULT 0,
        pro_id INT(5) NOT NULL,
        buy_id INT(5) NOT NULL,
        sell_id INT(5) NOT NULL,
        trade_status TINYINT NOT NULL,
        PRIMARY KEY(order_id),
        FOREIGN KEY(pro_id) REFERENCES product(pro_id),
        FOREIGN KEY(buy_id) REFERENCES user(user_id),
        FOREIGN KEY(sell_id) REFERENCES user(user_id)
    );`,

    /* sql 插入数据 */
    INSERT_USER: (data) => `INSERT INTO user(
        user_id, 
        user_name, 
        user_pass, 
        user_phone, 
        sex
    ) VALUES (
        ${data.userId},
        '${data.userName}', 
        '${data.userPass}', 
        '${data.userPhone}', 
        ${data.sex}
    );`,
    INSERT_PRODUCT: (data) => `INSERT INTO product(
        pro_id, 
        pro_title, 
        pro_subtitle, 
        pro_detail, 
        original_price, 
        current_price, 
        pro_keep, 
        pro_code, 
        review_status
    ) VALUES (
        ${data.proId}, 
        '${data.proTitle}', 
        '${proSubtitle}', 
        '${data.proDetail}', 
        '${data.originalPrice}', 
        '${data.currentPrice}', 
        '${pro_keep}', 
        '${pro_code}', 
        '${review_status}'
    );`,
    INSERT_ORDER: (data) => `INSERT INTO productorder(
        order_id, 
        create_date, 
        deal_date, 
        pro_price, 
        pro_id, 
        buy_id, 
        sell_id, 
        trade_status
    ) VALUES (
        ${data.orderId}, 
        '${data.createDate}', 
        '${data.dealDate}', 
        '${data.proPrice}', 
        ${data.proId}, 
        ${data.buyId}, 
        ${sellId}, 
        '${trade_status}'
    );`,
    /* sql 更新数据 */
    UPDATE_USER: (data) => 
    `UPDATE user 
        SET ${data.filedAarray} 
        WHERE(user_id=${data.userId});`,
    UPDATE_PRODUCT: (data) => 
    `UPDATE product 
        SET ${data.filedAarray} 
        WHERE(user_id=${data.product_id});`,
    UPDATE_USER: (data) => 
    `UPDATE productorder
    SET ${data.filedAarray} 
    WHERE(user_id=${data.order_id});`,
    /* sql 删除数据 */
    DELETE_USER: (data) => 
    `DELETE FROM user WHERE(user_id=${data.userId});`,
    DELETE_PRODUCT: (data) => 
    `DELETE FROM user WHERE(user_id=${data.pro_id});`,
    DELETE_PRODUCTORDER: (data) => 
    `DELETE FROM user WHERE(user_id=${data.order_id});`,
}