Vue.component('category', {
    template: require('./template/category.html'),
    props: {

    },
    data() {
        return {
            thead_list: [{
                header: 'cateName',
                text: '分类名称'
            }, {
                header: 'brandName',
                text: '品牌名称'
            }, {
                header: 'brandIntro',
                text: '品牌介绍'
            }],
            trow_list: [{
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }, {
                cateName: 'LV',
                brandName: 'LV',
                brandIntro: '自1854年以来...'
            }],
            cate_name: '',
            brand_name: '',
            brand_intro: '',
            is_show: true
        }
    },
    methods: {
        showPop(trow) {
            console.log(trow)
        },
        deleteItem(trowIndex) {
            console.log(trowIndex)
        }
    }
})