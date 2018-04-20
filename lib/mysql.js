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
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

// 查找整张表
const queryAll = (table) => {
    return new Promise((resolve, reject) => {
        query(SQL.QUERY_ALL(table)).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 查找数据
const queryTable = (table, data) => {
    return new Promise((resolve, reject) => {
        switch (table) {
            case 'user': {
                query(SQL.QUERY_USER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                query(SQL.QUERY_PRODUCT(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'productorder': {
                query(SQL.QUERY_PRODUCTORDER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'category': {
                query(SQL.QUERY_CATEGORY(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
        }
    })
}

// 插入数据
const insertTable = (table, data) => {
    return new Promise((resolve, reject) => {
        switch (table) {
            case 'user': {
                query(SQL.INSERT_USER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                query(SQL.INSERT_PRODUCT(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'productorder': {
                query(SQL.INSERT_PRODUCTORDER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'category': {
                query(SQL.INSERT_CATEGORY(data)).then(res => {
                    resolve(res)
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
        switch (table) {
            case 'user': {
                let obj = {
                    fieldArray: '',
                    user_id: data.user_id
                }
                for (let item in data) {
                    if (item !== 'user_id') {
                        obj.fieldArray += `${item}='${data[item]}',`
                    }
                }
                obj.fieldArray = obj.fieldArray.slice(0, obj.fieldArray.length - 1)
                query(SQL.UPDATE_USER(obj)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            }
            case 'product': {
                let obj = {
                    fieldArray: '',
                    pro_id: data.pro_id
                }
                for (let item in data) {
                    if (item !== 'pro_id') {
                        obj.fieldArray += `${item}='${data[item]}',`
                    }
                }
                obj.fieldArray = obj.fieldArray.slice(0, obj.fieldArray.length - 1)
                query(SQL.UPDATE_product(obj)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
            case 'productorder': {
                let obj = {
                    fieldArray: '',
                    order_id: data.order_id
                }
                for (let item in data) {
                    if (item !== 'order_id') {
                        obj.fieldArray += `${item}='${data[item]}',`
                    }
                }
                obj.fieldArray = obj.fieldArray.slice(0, obj.fieldArray.length - 1)
                query(SQL.UPDATE_PRODUCTORDER(obj)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
            case 'category': {
                let obj = {
                    fieldArray: '',
                    cate_id: data.cate_id
                }
                for (let item in data) {
                    if (item !== 'cate_id') {
                        obj.fieldArray += `${item}='${data[item]}',`
                    }
                }
                obj.fieldArray = obj.fieldArray.slice(0, obj.fieldArray.length - 1)
                query(SQL.UPDATE_CATEGORY(obj)).then(res => {
                    resolve(res)
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
        switch (table) {
            case 'user': {
                query(SQL.DELETE_USER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
            case 'product': {
                query(SQL.DELETE_PRODUCT(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
            case 'productorder': {
                query(SQL.DELETE_PRODUCTORDER(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
            case 'category': {
                query(SQL.DELETE_CATEGORY(data)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }
        }
    })
}

// 根据分类ID查询商品
const queryProByCateId = (data) => {
    return new Promise((resolve, reject) => {
        query(SQL.QUERY_PRODUCT_BY_CATEGORY(data)).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 初始化
(function initDatabase() {
    // 建表
    createTable(SQL.CREATE_USER)
        .then(() => {
            return createTable(SQL.CREATE_CATEGORY)
        }).then(() => {
            return createTable(SQL.CREATE_PRODUCT)
        }).then(() => {
            return createTable(SQL.CREATE_PRODUCTORDER)
        }).catch(res => {
            console.log(res)
        })
})()

module.exports = {
    query: query,
    queryAll: queryAll,
    queryTable: queryTable,
    insertTable: insertTable,
    updateTable: updateTable,
    deleteTable: deleteTable,
    queryProByCateId: queryProByCateId
}