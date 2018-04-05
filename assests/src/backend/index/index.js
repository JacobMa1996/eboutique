import './index.scss'
import '../../vueComponent'
import './category'

new Vue({
    el: '#admin',
    data() {
        return {
            slide_index: 0, // 默认0
            slide_list: [{
                index: 0,
                text: '分类设置'
            }, {
                index: 1,
                text: '审核设置'
            }, {
                index: 2,
                text: '数据分析'
            }]
        }
    },
    mounted() {
        console.log(this.slide_list)
    },
    methods: {
        toggleSlide(index) {
            this.slide_index = index
        }
    }
})