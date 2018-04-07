Vue.component('v-table', {
    template: require('./template.html'),
    props: {
        thead_list: {
            type: Array,
            default: () => {
                return [{}]
            }
        },
        trow_list: {
            type: Array,
            defalut: () => {
                return [{}]
            }
        },
        title: {
            type: String,
            default: '表格标题'
        },
        key_id: {
            type: String
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