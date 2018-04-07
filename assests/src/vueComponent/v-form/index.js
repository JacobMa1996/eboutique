Vue.component('v-form', {
    template: require('./template.html'),
    props: {
        tip: {
            type: String,
            default: null
        },
        input_list: {
            type: Array,
            default: null
        },
        textarea_list: {
            type: Array,
            default: null
        },
        check_list: {
            type: Array,
            default: null
        },
        button: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        click() {
            let _this = this
            let data ={
                tip: _this.tip,
                input_list: _this.input_list,
                textarea_list: _this.textarea_list,
                check_list: _this.check_list,
                button: _this.button,
            }
            this.$emit('submit', data)
        }
    }
})