/*
status: {
    
},
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
*/

Vue.component('v-table', {
    template: require('./template.html'),
    props: {
        options: {}
    },
    data() {
        return {

        }
    },
    methods: {
        showPop(trow) {
            this.$emit('show_pop', trow)
        },
        deleteItem(trowIndex) {
            this.$emit('delete_item', trowIndex)
        },
        changeStatus (trowIndex) {
            this.options.trow_list[trowIndex].status.value = !this.options.trow_list[trowIndex].status.value
            this.$emit('changeStatus', trowIndex)
        }
    }
})