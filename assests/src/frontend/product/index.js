import './index.scss'

window.vm = new Vue({
    el: '#container',
    data () {
        return {

        }
    },
    mounted() {
        this.getInitData()
    },
    methods: {
        getInitData() {
            let id = EB.query('id', location.href)
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
                    console.log(res)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    }
})