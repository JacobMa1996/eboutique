const mysql = require('mysql')
const MYSQLCONFIG = require('../config/mysql.config') // 数据库配置
const SQL = require('./sql') // sql语句
const REG_MATCH = require('./reg_match') // 字段类型 正则

// mysql
const pool = mysql.createPool(MYSQLCONFIG)

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
    query(sql, null).then((res) => {
        console.log('create table sucess:' + res)
    }).catch((err) => {
        console.log('create table failed:' + err)
    })
}

// 插入数据
const insert = (table, dataArr) => {
    switch (table) {
        case 'user': {

            SQL.INSERT_USER(dataArr)
            break
        }
        case 'product': {
            break
        }
        case 'order': {
            break
        }
    }
}

// 初始化
(function initDatabase() {
    // 建表
    createTable(SQL.CREATE_USER)
    createTable(SQL.CREATE_PRODUCT)
    createTable(SQL.CREATE_ORDER)
})()

module.exports = {
    query: query
}