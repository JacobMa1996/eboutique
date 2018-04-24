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
            const userInfo = {
                userName: this.userName, 
                userPassword: this.userPassword
            }
            EB.ajax({
                url: '/api/admin/login',
                data: userInfo,
                method: 'post',
                success(res) {
                    // alert('登陆成功')
                    setTimeout(() => {
                        location.href = '/admin'
                    }, 0)
                }, 
                error(err) {
                    console.log(err)
                    // alert(err)
                }
            })
        }
    }
})