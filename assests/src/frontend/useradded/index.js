import '../../vueComponent'
import './index.scss'

let vm = new Vue({
    el: '#container',
    data() {
        return {
            user: {},
            proBrand: '',
            brandName: '',
            cateName: '',
            proSubtitle: '',
            proDetail: '',
            originPrice: '',
            currentPrice: '',
            proCode: '',
            proImg: '',
            proKeep: ''
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
        add () {

        },
        upload (imgUrl) {
            this.proImg = imgUrl
        }
    }
})