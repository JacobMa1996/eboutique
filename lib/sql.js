/**
 * 增删改查
 */

module.exports = {
    /* sql 建表 */
    CREATE_USER: `CREATE TABLE IF NOT EXISTS user(
        user_id INT(5) NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(255) NOT NULL,
        user_pass VARCHAR(255) NOT NULL,
        user_phone VARCHAR(255) NOT NULL,
        user_img TEXT NOT NULL,
        sex TINYINT NOT NULL,
        favorites TEXT NOT NULL,
        added TEXT NOT NULL,
        carts TEXT NOT NULL,
        PRIMARY KEY (user_id)
    );`.replace(/[\r\n]/g, ''),
    CREATE_CATEGORY: `CREATE TABLE IF NOT EXISTS category(
        cate_id INT(5) NOT NULL AUTO_INCREMENT,
        cate_name VARCHAR(255) NOT NULL,
        brand_name VARCHAR(255) NOT NULL,
        brand_intro TEXT NOT NULL,
        is_show TINYINT NOT NULL,
        PRIMARY KEY(cate_id)
    );`.replace(/[\r\n]/g, ''),
    CREATE_PRODUCT: `CREATE TABLE IF NOT EXISTS product(
        pro_id INT(5) NOT NULL AUTO_INCREMENT,
        cate_id INT(5) NOT NULL,
        pro_title VARCHAR(255) NOT NULL,
        pro_subtitle TEXT NOT NULL,
        pro_detail TEXT NOT NULL,
        pro_img TEXT NOT NULL,
        original_price DOUBLE NOT NULL DEFAULT 0,
        current_price DOUBLE NOT NULL DEFAULT 0,
        pro_keep TINYINT NOT NULL,
        pro_code TEXT NOT NULL,
        review_status TINYINT NOT NULL,
        PRIMARY KEY (pro_id),
        FOREIGN KEY(cate_id) REFERENCES category(cate_id)
    );`.replace(/[\r\n]/g, ''),
    CREATE_PRODUCTORDER: `CREATE TABLE IF NOT EXISTS productorder(
        order_id INT(5) NOT NULL AUTO_INCREMENT,
        create_date VARCHAR(255) NOT NULL,
        trade_date VARCHAR(255) NOT NULL,
        pro_price DOUBLE NOT NULL DEFAULT 0,
        pro_id INT(5) NOT NULL,
        buy_id INT(5) NOT NULL,
        sell_id INT(5) NOT NULL,
        trade_status TINYINT NOT NULL,
        PRIMARY KEY(order_id),
        FOREIGN KEY(pro_id) REFERENCES product(pro_id),
        FOREIGN KEY(buy_id) REFERENCES user(user_id),
        FOREIGN KEY(sell_id) REFERENCES user(user_id)
    );`.replace(/[\r\n]/g, ''),

    /* sql 查询数据 */
    QUERY_ALL: (table) => `SELECT * FROM ${table}`,
    QUERY_USER: (data) => `SELECT * FROM USER WHERE(user_name='${data.user_name}')`,
    QUERY_CATEGORY: (data) => `SELECT * FROM USER WHERE(cate_id='${data.cate_id}')`,
    QUERY_PRODUCT: (data) => `SELECT * FROM USER WHERE(pro_id='${data.pro_id}')`,
    QUERY_PRODUCTORDER: (data) => `SELECT * FROM USER WHERE(order_id='${data.order_id}')`,
    
    /* sql 插入数据 */
    INSERT_USER: (data) => `INSERT INTO user(user_name, user_pass, user_phone, user_img, sex, favorites, added, carts) VALUES ('${data.user_name}', '${data.user_pass}', '${data.user_phone}', '${data.user_img}', ${data.sex}, '${data.favorites}', '${data.added}', '${data.carts}');`,
    INSERT_CATEGORY: (data) => `INSERT INTO category(cate_name, brand_name, brand_intro, is_show) VALUES ('${data.cate_name}', '${data.brand_name}','${data.brand_intro}', '${data.is_show}');`,
    INSERT_PRODUCT: (data) => `INSERT INTO product(cate_id, pro_title, pro_subtitle, pro_detail, pro_img, original_price, current_price, pro_keep, pro_code, review_status) VALUES (${data.cate_id}, '${data.pro_title}', '${data.pro_subtitle}', '${data.pro_detail}', '${data.pro_img}', '${data.original_price}', '${data.current_price}', '${data.pro_keep}', '${data.pro_code}', '${data.review_status}');`,
    INSERT_ORDER: (data) => `INSERT INTO productorder(create_date, deal_date, pro_price, pro_id, buy_id, sell_id, trade_status) VALUES ('${data.create_date}', '${data.deal_date}', '${data.pro_price}', ${data.pro_id}, ${data.buy_id}, ${data.sell_id}, '${data.trade_status}');`,

    /* sql 更新数据 */
    UPDATE_USER: (data) =>`UPDATE user SET ${data.fieldArray} WHERE(user_id=${data.user_id});`,
    UPDATE_CATEGORY: (data) =>`UPDATE category SET ${data.fieldArray} WHERE(cate_id=${data.cate_id});`,
    UPDATE_PRODUCT: (data) =>`UPDATE product SET ${data.fieldArray} WHERE(pro_id=${data.pro_id});`,
    UPDATE_PRODUCTORDER: (data) =>`UPDATE productorder SET ${data.fieldArray} WHERE(order_id=${data.order_id});`,
    
    /* sql 删除数据 */
    DELETE_USER: (data) =>`DELETE FROM user WHERE(user_id=${data.user_id});`,
    DELETE_CATEGORY: (data) =>`DELETE FROM category WHERE(cate_id=${data.cate_id});`,
    DELETE_PRODUCT: (data) =>`DELETE FROM product WHERE(pro_id=${data.pro_id});`,
    DELETE_PRODUCTORDER: (data) =>`DELETE FROM productorder WHERE(order_id=${data.order_id});`,
    
}