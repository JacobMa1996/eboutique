import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {
                user_name: null
            },
            cateList: [],
            productList: []
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
                    if (res.data) {
                        console.log(res)
                        _this.user = res.data
                    }
                },
                error(err) {
                    console.log(err)
                }
            })
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success(res) {
                    _this.cateList = res.data
                },
                error(err) {
                    console.log(err)
                }
            })
            
        },
        getProductList (cateId) {
            let _this = this
            EB.ajax({
                url: '/api/getProductList',
                method: 'post',
                data: {
                    cateId: cateId
                },
                success(res) {
                    _this.productList = res.data
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    }
})