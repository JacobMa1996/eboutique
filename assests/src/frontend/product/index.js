import './index.scss'

window.vm = new Vue({
    el: '#container',
    data () {
        return {
            user: {
                user_name: null
            },
            product: {}
        }
    },
    mounted() {
        this.getInitData()
    },
    methods: {
        getInitData() {
            let id = EB.query('id', location.href)
            var _this = this
            EB.ajax({
                url: '/api/common/getUserInfo',
                method: 'get',
                success(res) {
                    if (res.data) {
                        _this.user = res.data
                    }
                },
                error(err) {
                    console.log(err)
                }
            })
            this.getProductDetail(id)
        },
        getProductDetail (proId) {
            let _this = this
            EB.ajax({
                url: '/api/getProductDetail',
                data: {
                    proId: proId
                },
                method: 'post',
                success(res) {
                    _this.product = res.data
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        buy () {
            if (!EB.isLogin()) {
                return
            }
            let _this = this
            console
            let data = {
                proId: _this.product.pro_id,
                buyId: _this.user.user_id,
                sellId: _this.product.user_id
            }
            EB.ajax({
                url: '/api/productBuy',
                method: 'post',
                data: data,
                success(res) {
                    console.log(res)
                },
                error (err) {
                    console.log(err)
                }
            })
        }
    }
})