Vue.component('v-confirm', {
    template: require('./template.html'),
    props: {
        options: {
            // isConfirm: {
            //     type: Boolean,
            //     default: false
            // },
            // title: {
            //     type: String,
            //     default: '提示'
            // },
            // tip: {
            //     type: String,
            //     default: '提交成功！'
            // },
            // confirm: {
            //     type: String,
            //     default: '确定要这么做吗？'
            // },
            // value: {
            //     type: String,
            //     default: ''
            // },
            // type: {
            //     type: Number,
            //     default: 0
            // } // 0 提示框 1 是否选项框 2 输入框
        }
    },
    data () {
        return {

        }
    },
    methods: {
        cancel () {
            this.options.isConfirm = false
        },
        submit () {
            if (this.options.type === 1) {
                this.options.value = true
                // this.$emit()
            }
            if (this.options.type === 2) {
                this.$emit('submit', this.options.value)
            }
            this.options.isConfirm = false
        }
    }
})