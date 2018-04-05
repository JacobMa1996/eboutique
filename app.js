const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const nunjucks = require('nunjucks')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const mysql = require('mysql')
const NODE_ENV = require('./config/config')
const MYSQLCONFIG = require('./config/mysql.config')

const routers = require('./route')

process.env.NODE_ENV = NODE_ENV

// error handler
onerror(app)
 
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/assests'))

app.use(views(__dirname + '/views', {
  extension: 'html', 
  map: {
    html: 'nunjucks'
  }
}))

// session
const THIRTY_MINTUES = 30 * 60 * 1000
 
app.keys = ['SESSION-ID']

app.use(session({
        key: 'SESSION-ID',
        store: new MysqlStore(MYSQLCONFIG),
        rolling: true,
        cookie: {
            maxage:THIRTY_MINTUES
        }
}))

// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

//router
routers.forEach(val => {
  app.use(val.routes(), val.allowedMethods())
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

//watch statics
require('./assests/build/watch')()

module.exports = app
