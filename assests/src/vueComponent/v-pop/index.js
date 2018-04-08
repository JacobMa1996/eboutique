Vue.component('v-pop', {
    template: require('./template.html'),
    props: {
        options: {}
        
    },
    data () {
        return {

        }
    },
    methods: {
        close() {
            this.options.modal = false
        },
        submit() {
            this.$emit('submit', this.options.form_options)
            this.options.modal = false
        }
    }
})