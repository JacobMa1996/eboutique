const mysql = require('mysql')
const mysqlConfig = require('../config/mysql.config')

// mysql
const pool = mysql.createPool({ mysqlConfig })

// query
const query = (sql, val) => {
    return new Promise((reslove, reject) => {
        pool.getConnection(function (err, connection) {
            console.log(arguments)
            if (err) {
                reject(err)
            }
            else {
                connection.query(sql, val, (err, fields) => {
                    if (err) reject(err)
                    else resolve(fields)
                    connection.release()
                })
            }
        })
    })
}

const users =
    `create table if not exists users(
        user_id INT NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(100) NOT NULL,
        user_pass VARCHAR(40) NOT NULL,
        user_phone VARCHAR(100) NOT NULL,
        sex TINYINT NOT NULL,
        PRIMARY KEY (user_id)
    );`,
    products =
        `create table if not exists products(
        pro_id INT NOT NULL AUTO_INCREMENT,
        pro_title VARCHAR()
    )`

const createTable = (sql) => {
    query(sql, []).then(() => {
        console.log('sucess')
    }).catch(() => {
        console.log('failed')
    })
}

// 建表
createTable(users)

module.exports = query