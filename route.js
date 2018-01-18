var home = require('./routes/home'), 
    user = require('./routes/user'), 
    category = require('./routes/category');

module.exports = [].concat(home, user, category);

