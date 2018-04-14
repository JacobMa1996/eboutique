Vue.component('category', {
    template: require('./template/category.html'),
    props: {

    },
    data() {
        var _this = this
        return {
            title: '分类',
            // table
            table_options: {
                key_id: 'cate_id',
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
            },
            
            // form
            form_options: {
                input_list: [{
                    label: '分类名称',
                    header: 'cate_name',
                    placeholder: '请输入分类名称',
                    value: ''
                }, {
                    label: '品牌名称',
                    header: 'brand_name',
                    placeholder: '请输入品牌名称',
                    value: ''
                }],
                textarea_list: [{
                    label: '品牌介绍',
                    header: 'brand_intro',
                    rows: '3',
                    placeholder: '请输入品牌介绍',
                    value: ''
                }],
                check_list: [{
                    label: '是否显示',
                    header: 'is_show',
                    value: true
                }],
                button: {
                    label: '添加'
                }
            },
            pop_options: {
                modal: false,
                pop_title: '编辑分类',
                form_options: {
                    key_id: [{
                        header: 'cate_id',
                        value: ''
                    }],
                    input_list: [{
                        label: '分类名称',
                        header: 'cate_name',
                        placeholder: '请输入分类名称',
                        value: ''
                    }, {
                        label: '品牌名称',
                        header: 'brand_name',
                        placeholder: '请输入品牌名称',
                        value: ''
                    }],
                    textarea_list: [{
                        label: '品牌介绍',
                        header: 'brand_intro',
                        rows: '3',
                        placeholder: '请输入品牌介绍',
                        value: ''
                    }],
                    check_list: [{
                        label: '是否显示',
                        header: 'is_show',
                        value: true
                    }]
                }
            }
        }
    },
    mounted() {
        this.getInitData()
    },
    methods: {
        showPop(trow) {
            let _this = this
            let obj = _this.pop_options.form_options
            for (let item in obj) {
                if (obj[item] instanceof Array) {
                    for (let key of obj[item]) {
                        key.value = trow[key.header]
                    }
                }
            }
            this.pop_options.modal = true
        },
        deleteItem(trowIndex) {
            let _this = this
            let cateId = _this.table_options.trow_list[trowIndex].cate_id
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
                    console.log(res)
                    _this.table_options.trow_list = res.data
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        add(obj) {
            let _this = this
            let data = {}
            for (let item in obj) {
                if(obj[item] instanceof Array) {
                    for (let key of obj[item]) {
                        data[key.header] = key.value
                    }
                }
            }
            let requestData = {
                cateName: data.cate_name,
                brandName: data.brand_name,
                brandIntro: data.brand_intro,
                isShow: data.is_show ? '1' : '0'
            }
            EB.ajax({
                url: '/api/admin/addCategory',
                data: requestData,
                method: 'post',
                success(res) {
                    _this.getInitData()
                },
                error (err) {
                    console.log(err)
                }
            })
        },
        edit(obj) {
            let _this = this
            let data = {}
            for (let item in obj) {
                if(obj[item] instanceof Array) {
                    for (let key of obj[item]) {
                        data[key.header] = key.value
                    }
                }
            }
            let requestData = {
                cateId: data.cate_id,
                cateName: data.cate_name,
                brandName: data.brand_name,
                brandIntro: data.brand_intro,
                isShow: data.is_show ? '1' : '0'
            }
            // 编辑api
            EB.ajax({
                url: '/api/admin/updateCagetory',
                data: requestData,
                method: 'post',
                success(res) {
                    _this.getInitData()
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    }
})