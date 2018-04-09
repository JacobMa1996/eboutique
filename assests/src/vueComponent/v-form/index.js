/**
 * tip: {
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
 */

Vue.component('v-form', {
    template: require('./template.html'),
    props: {
        options: {}
    },
    data() {
        return {
            
        }
    },
    methods: {
        click() {
            let _this = this
            let data = {
                tip: _this.options.tip,
                key_id: _this.key_id,
                input_list: _this.options.input_list,
                textarea_list: _this.options.textarea_list,
                check_list: _this.options.check_list,
                button: _this.options.button,
            }
            this.$emit('submit', data)
        }
    }
})