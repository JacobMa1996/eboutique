Vue.component('v-table', {
    template: require('./template.html'),
    props: {
        thead_list: {
            type: Array,
            default: [{}]
        },
        trow_list: {
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
        showPop(trow) {
            this.$emit('show_pop', trow)
        },
        deleteItem(trowIndex) {
            this.$emit('delete_item', trowIndex)
        }
    }
})