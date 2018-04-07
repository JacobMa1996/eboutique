Vue.component('category', {
    template: require('./template/category.html'),
    props: {

    },
    data() {
        return {
            thead_list: [{
                header: 'cate_name',
                text: '分类名称'
            }, {
                header: 'brand_name',
                text: '品牌名称'
            }, {
                header: 'brand_intro',
                text: '品牌介绍'
            }],
            trow_list: [],
            cate_name: '',
            brand_name: '',
            brand_intro: '',
            is_show: true
        }
    },
    mounted() {
        this.getInitData()
    },
    methods: {
        showPop(trow) {
            console.log(trow)
        },
        deleteItem(trowIndex) {
            let _this = this
            let cateId = _this.trow_list[trowIndex].cate_id
            let data = {
                cateId: cateId
            }
            EB.ajax({
                url: '/api/admin/deleteCategory',
                data: data,
                method: 'post',
                success(res) {
                    _this.getInitData()
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        getInitData() {
            let _this = this
            EB.ajax({
                url: '/api/admin/getCategoryList',
                method: 'get',
                success(res) {
                    _this.trow_list = res.data
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        submit() {
            let _this = this
            let data = {
                cateName: this.cate_name,
                brandName: this.brand_name,
                brandIntro: this.brand_intro
            }
            EB.ajax({
                url: '/api/admin/addCategory',
                data: data,
                method: 'post',
                success(res) {
                    _this.getInitData()
                }
            })
        }
    }
})