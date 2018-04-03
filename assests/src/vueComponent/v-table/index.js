Vue.component('v-table', {
    template: require('./template.html'),
    props: {
        theadList: {
            type: Array,
            default: [{}]
        },
        trowList: {
            type: Array,
            defalut: [{}]
        },
        title: {
            type: String,
            default: '表格标题'
        }
    },
    data () {
        return {
            
        }
    },
    methods: {

    }
})