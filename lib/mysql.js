const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/mysql.config') // 数据库配置
const SQL = require('./sql') // sql语句
const REG_MATCH = require('./reg_match') // 字段类型 正则

// mysql
const pool = mysql.createPool(MYSQL_CONFIG)

// query sql语句入口
const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
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

// 创建数据库表
const createTable = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql, null).then((res) => {
            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
}

// 插入数据
const insert = (table, data) => {
    return new Promise((resolve, reject) => {
        switch (table) {
            case 'user': {
                // for (let item in data) {
                //     if (!REG_MATCH[item].test(data[item])) {
                //         return false
                //     }
                // }
                console.log(SQL.INSERT_USER(data))
                query(SQL.INSERT_USER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                break
            }
            case 'order': {
                break
            }
        }
    })

}

// 初始化
(function initDatabase() {
    // 建表
    createTable(SQL.CREATE_USER).then(() => {
        return createTable(SQL.CREATE_PRODUCT)
    }).then(() => {
        return createTable(SQL.CREATE_ORDER)
    }).then(() => {
        insert('user', {
            userId: 10001,
            userName: 'root',
            userPass: '123456',
            userPhone: '13851913007',
            sex: 0
        })
    }).catch(res => {
        console.log(res)
    })


})()



module.exports = {
    query: query,
    insert: insert
}