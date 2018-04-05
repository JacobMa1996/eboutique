Vue.component('v-slide', {
    template: require('./template.html'),
    props: {
        slideIndex: {
            type: Number,
            default: 0
        },
        slideList: {
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
            this.slideIndex = index
        }
    }
})