Vue.component('product', {
    template: require('./template/product.html'),
    props: {

    },
    data () {
        return {
            // table
            table_options: {
                key_id: 'pro_id',
                thead_list: [{
                    header: 'pro_code',
                    text: '商品编号'
                }, {
                    header: 'cate_name',
                    text: '品牌名称'
                }, {
                    header: 'pro_title',
                    text: '商品名称'
                }, {
                    header: 'pro_keep',
                    text: '是否损坏'
                }, {
                    header: 'original_price',
                    text: '商品原价'
                }, {
                    header: 'current_price',
                    text: '商品现价'
                }],
                trow_list: [],
            },
        }
    },
    mounted () {
        this.getInitData()
    },
    methods: {
        getInitData () {
            let _this = this
            EB.ajax({
                url: '/api/admin/getProductList',
                method: 'get',
                success(res) {
                     res.data.forEach((val, index) => {
                        _this.table_options.trow_list.push(Object.assign(val, {
                            status: {
                                value: val.review_status ? true : false,
                                before: '未审核',
                                after: '已审核'
                            },
                            pro_keep: val.pro_keep === '1' ? '无损坏' : '有损坏'
                        }))
                     })
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        changeStatus (index) {
            let _this = this
            let data = {
                proId: _this.table_options.trow_list[index].pro_id,
                reviewStatus: _this.table_options.trow_list[index].status.value ? 1 : 0
            }
            EB.ajax({
                url: '/api/admin/changeProReviewStatus',
                data: data,
                method: 'post',
                success(res) {
                    console.log(res)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    }
})