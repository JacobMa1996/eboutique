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
        initStyle () {
            let nav = this.$refs.nav
            let con = this.$refs.con
            $(window).on('scroll', function() {
                let scrollTop = $(this).scrollTop()
                if (scrollTop >= 60) {
                    $(nav).css({
                        position: 'fixed',
                        width: '100%',
                        top: '0'
                    })
                    $(con).css('margin-top', '45px')
                } else {
                    $(nav).css('position', 'static')
                    $(con).css('margin-top', '0')
                }
            })
        },
        getInitData() {
            let _this = this
            this.initStyle()
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
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success(res) {
                    _this.cateList = res.data
                    _this.getProductList(_this.cateList[0].cate_id)
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
        },
        goToDetail(proId) {
            location.href = `/product?id=${proId}`
        }
    }
})