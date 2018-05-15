var home = require('./home'), 
    user = require('./user'), 
    category = require('./category')
    api = require('./api')
var admin = require('./admin')

module.exports = [].concat(home, user, category, admin, api)