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
    // order是mysql的关键字，所以要用反引号
    CREATE_ORDER: "create table if not exists `order`(order_id INT(5) NOT NULL AUTO_INCREMENT,create_date DATE NOT NULL,trade_date DATE NOT NULL,pro_price DOUBLE NOT NULL DEFAULT 0,pro_id INT(5) NOT NULL,buy_id INT(5) NOT NULL,sell_id INT(5) NOT NULL,trade_status TINYINT NOT NULL,PRIMARY KEY(order_id),FOREIGN KEY(pro_id) REFERENCES product(pro_id),FOREIGN KEY(buy_id) REFERENCES user(user_id),FOREIGN KEY(sell_id) REFERENCES user(user_id));",

    /* sql 插入数据 */
    INSERT_USER: (data) => `INSERT INTO user(
        user_id, user_name, user_pass, user_phone, sex
    ) VALUES (
        ${data.userId}, '${data.userName}', '${data.userPass}', '${data.userPhone}', ${data.sex}
    );`

}