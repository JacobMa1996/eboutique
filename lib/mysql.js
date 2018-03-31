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
const insertTable = (table, data) => {
    return new Promise((resolve, reject) => {
        switch (table) {
            case 'user': {
                query(SQL.INSERT_USER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                query(SQL.INSERT_PRODUCT(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'productorder': {
                query(SQL.INSERT_PRODUCTORDER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                break
            }
        }
    })

}

// 更新数据
const updateTable = (table, data) => {
    return new Promise((resolve, reject) => {
        switch(table) {
            case 'user': {
                query(SQL.UPDATE_USER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                query(SQL.UPDATE_product(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
            case 'productorder': {
                query(SQL.UPDATE_PRODUCTORDER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
        }
    })
}

// 删除数据
const deleteTable = (table, data) => {
    return new Promise((resolve, reject) => {
        switch(table) {
            case 'user': {
                query(SQL.DELETE_USER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
            case 'product': {
                query(SQL.DELETE_PRODUCT(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
            case 'productorder': {
                query(SQL.DELETE_PRODUCTORDER(data)).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
        }
    })
}

// 初始化
(function initDatabase() {
    // 建表
    createTable(SQL.CREATE_USER)
        .then(() => {
            return createTable(SQL.CREATE_PRODUCT)
        }).then(() => {
            return createTable(SQL.CREATE_PRODUCTORDER)
        }).catch(res => {
            console.log(res)
        })

})()

module.exports = {
    query: query,
    insertTable: insertTable,
    updateTable: updateTable,
    deleteTable: deleteTable
}