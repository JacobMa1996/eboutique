import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {},
            orderList: []
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
                        EB.ajax({
                            url: '/api/getOrdersByUserId',
                            method: 'post',
                            data: {
                                buyId: _this.user.user_id
                            },
                            success(res) {
                                _this.orderList = res.data
                            },
                            error(err) {
                                console.log(err)
                            }
                        })
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
        }
    },
    filters: {
        date(val) {
            let frontDate = val.split(' ')[0].replace(/\//g, '-')
            let backDate = val.split(' ')[1].replace(/\//g, ':')
            return frontDate + ' ' + backDate
        },
        status(val) {
            let newVal = ''
            switch (val) {
                case 0:
                    newVal = '待支付'
                    break
                case 1:
                    newVal = '待交付'
                    break
                case 2:
                    newVal = '完成'
                    break
                default:
                    break
            }
            return newVal
        },
        statusClass (val) {
            let newVal = ''
            switch (val) {
                case 0:
                    newVal = 'red'
                    break
                case 1:
                    newVal = 'orange'
                    break
                case 2:
                    newVal = 'green'
                    break
                default:
                    break
            }
            return newVal
        }
    }
})