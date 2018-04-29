import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {
                user_name: null
            },
            cateList: [],
            productList: [],
            tabNum: 0
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
                    _this.cateList.length && _this.getProductList(_this.tabNum)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        getProductList (index) {
            let _this = this
            _this.tabNum = index
            let cateId = _this.cateList[index] ? _this.cateList[index].cate_id : 0
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
        goToDetail(item) {
            if (item.pro_isbuy) {
                alert('抱歉，此商品已被下单！')
                return
            } else {
                location.href = `/category/product?id=${item.pro_id}`
            }
        }
    }
})