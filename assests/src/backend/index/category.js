import '../../vueComponent'

Vue.component('category', {
    template: require('./template/category.html'),
    props: {

    },
    data () {
        return {
            theadList: [{
                header: 'cateName',
                text: '分类名称'
            }, {
                header: 'brandName',
                text: '品牌名称'
            }, {
                header: 'brandIntro',
                text: '品牌介绍'
            }, {
                header: 'handle',
                text: '操作'
            }],
            trowList: [{
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...',
                handle: '删除'
            }]
        }
    },
    methods: {

    }
})