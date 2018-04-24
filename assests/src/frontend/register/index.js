import './index.scss'

new Vue({
    el: '.form',
    data() {
        return {
            userName: '', 
            userPass: '',
            userPasswordRepeat: '',
            userPhone: '',
            text: '123'
        }
    }, 
    methods: {
        submit () {
            const userInfo = {
                userName: this.userName, 
                userPass: this.userPass,
                userPhone: this.userPhone,
            }
            EB.ajax({
                url: '/api/user/register',
                data: userInfo,
                method: 'post',
                success(res) {
                    // alert('注册成功')
                    setTimeout(() => {
                        location.href = '/login'
                    },0)
                }, 
                error(err) {
                    console.log(err)
                    // alert(err)
                }
            })
        }
    }
})