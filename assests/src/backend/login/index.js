import './index.scss'

new Vue({
    data() {
        return {
            userName: '', 
            userPassword: ''
        }
    }, 
    methods: {
        submit () {
            const userInfo = {
                userName: this.userName, 
                userPassword: this.userPassword
            }
            EB.ajax({
                url: '/api_login', 
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