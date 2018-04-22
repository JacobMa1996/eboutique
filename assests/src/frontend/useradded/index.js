import '../../vueComponent'
import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {},
            proTitle: '',
            cateList: [],
            cateId: '',
            proSubtitle: '',
            proDetail: '',
            originalPrice: '',
            currentPrice: '',
            proCode: '',
            proImg: '',
            proKeep: false
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
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success(res) {
                    _this.cateList = res.data
                }
            })
        },
        add () {
            let _this = this
            let data = {
                cateId: _this.cateId,
                userId: _this.user.user_id,
                proTitle: _this.proTitle,
                proSubtitle: _this.proSubtitle,
                proDetail: _this.proDetail,
                proImg: _this.proImg,
                originalPrice: _this.originalPrice,
                currentPrice: _this.currentPrice,
                proKeep: _this.proKeep,
                proCode: _this.proCode
            }
            EB.ajax({
                url: '/api/addProduct',
                method: 'post',
                data: data,
                success(res) {
                    console.log(res)
                }
            })

        },
        upload (imgUrl) {
            this.proImg = imgUrl
        }
    }
})