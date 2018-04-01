import './index.scss'

let vm = new Vue({
    el: '#admin',
    data() {
        return {
            slideIndex: 0, // 默认0
            slideList: [{
                id: 0,
                text: '分类设置'
            }, {
                id: 1,
                text: '审核设置'
            }, {
                id: 2,
                text: '数据分析'
            }]
        }
    },
    methods: {
        toggleSlide(index) {
            this.slideIndex = index
        }
    }
})
