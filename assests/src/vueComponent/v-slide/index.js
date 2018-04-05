Vue.component('v-slide', {
    template: require('./template.html'),
    props: {
        slide_index: {
            type: Number,
            default: 0
        },
        slide_list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {

        }
    },
    methods: {
        toggleSlide(index) {
            this.$emit('toggle_slide', index)
        }
    }
})