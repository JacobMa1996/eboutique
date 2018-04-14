// const DATA_TYPE = {
//     'user_name': 'userName',
//     'user_pass': 'userPass',
//     'user_phone': 'userPhone',
//     'user_img': 'userImg',
//     'sex': 'sex',
//     'favorites': 'favorites',
//     'added': 'added',
//     'carts': 'carts'
// }

class User {
    constructor (data) {
       this.user_name = data.userName || ''
       this.user_pass = data.userPass || ''
       this.user_phone = data.userPhone || ''
       this.user_img = data.userImg || ''
       this.sex = data.sex || 0
       this.favorites = data.favorites || ''
       this.added = data.added || ''
       this.carts = data.carts || ''
    }
    verify () {
        return true
    }
}

modulex.exports = User