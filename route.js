var home = require('./routes/home'), 
    user = require('./routes/user'), 
    category = require('./routes/category')
    api = require('./routes/api')
var admin = require('./routes/admin')

module.exports = [].concat(home, user, category, admin, api)
