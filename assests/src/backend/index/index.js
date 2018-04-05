import './index.scss'
import '../../vueComponent'
import './category'

new Vue({
    el: '#admin',
    data() {
        return {
            slideIndex: 0, // 默认0
            slideList: [{
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
        console.log(this.slideList)
    },
    methods: {

    }
})