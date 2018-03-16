import './index.scss'

new Vue({
    el: '.form',
    data() {
        return {
            userName: '', 
            userPassword: '',
            text: '123'
        }
    }, 
    methods: {
        submit () {
            console.log(1)
            const userInfo = {
                userName: this.userName, 
                userPassword: this.userPassword
            }
            EB.ajax({
                url: '/admin/api_login', 
                type: 'post', 
                success(res) {
                    alert('登陆成功')
                    setTimeout(() => {
                        location.href = '/admin'
                    }, 1500)
                }, 
                error(err) {
                    alert(res)
                }
            })
        }
    }
})