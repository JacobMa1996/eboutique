Vue.component('v-upload', {
    template: require('./template.html'),
    props: {
        className: {
            type: String,
            default: ''
        },
        label: String
    },
    data() {
        return {

        }
    },
    methods: {
        change(e) {
            let _this = this
            let form = this.$refs.upload
            let fd = new FormData(form)
            $.ajax({
                url: '/api/common/upload',
                type: 'post',
                data: fd,
                processData: false, // 不处理发送的数据
                contentType: false, // 不设置content-type请求头
                success: (res) => {
                    let imgUrl = `/uploads/${res.data}`
                    _this.$emit('upload', imgUrl)
                }
            })
        }
    }
})