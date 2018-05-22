import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {},
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
                    if (res) {
                        console.log(res)
                        _this.user = res.data

                        EB.ajax({
                            url: '/api/getMyAddedProduct',
                            data: {
                                userId: _this.user.user_id
                            },
                            method: 'post',
                            success(res) {
                                _this.productList = res.data
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

        },
        direct(id) {
            location.href = `/category/product?id=${id}`
        }
    }
})