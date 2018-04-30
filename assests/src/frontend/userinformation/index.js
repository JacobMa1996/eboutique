import './index.scss'
import '../../vueComponent'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {},
            confirm_options: {
                isConfirm: false,
                title: '修改昵称',
                type: 2,
                value: '123'
            },
            type: '' // 修改信息的类型
        }
    },
    mounted() {
        this.getInitData()
    },
    methods: {
        getInitData() {
            let _this = this
            EB.ajax({
                url: '/api/common/getUserInfo',
                method: 'get',
                success(res) {
                    if (res) {
                        console.log(res)
                        _this.user = res.data
                    } else {
                        _this.user = {
                            userName: null
                        }
                        console.log('no login')
                    }
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        getConfirm(type) {
            this.type = type
            switch (type) {
                case 'userName': {
                    this.confirm_options.value = this.user.user_name
                    this.confirm_options.title = '修改昵称'
                    this.confirm_options.isConfirm = true
                    break
                }
                case 'userPhone': {
                    this.confirm_options.title = '修改手机号'
                    this.confirm_options.value = this.user.user_phone
                    this.confirm_options.isConfirm = true
                    break
                }
                case 'sex': {
                    this.confirm_options.title = '修改性别'
                    let sex = this.user.sex ? (this.user.sex === 1 ? '男' : '女') : '未设置'
                    this.confirm_options.value = sex
                    this.confirm_options.isConfirm = true
                    break
                }
                default: {
                    break
                }
            }
        },
        changeInformation(value) {
            let _this = this
            let data = {
                userId: _this.user.user_id
            }
            switch (this.type) {
                case 'userName': {
                    data.userName = value
                    break
                }
                case 'userPhone': {
                    data.userPhone = value
                    break
                }
                case 'sex': {
                    if (value === '男') {
                        data.sex = 1
                    } else if (value === '女') {
                        data.sex = 2
                    } else {
                        alert('请填写男或女')
                    }
                    break
                }
            }
            EB.ajax({
                url: '/api/user/updateUser',
                data: data,
                method: 'post',
                success(res) {
                    _this.getInitData()
                    console.log(res)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        redirect (url) {
            location.href = url
        }
    }
})