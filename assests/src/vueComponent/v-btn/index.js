Vue.component('v-btn', {
    template: require('./template.html'),
    props: {
        options: {}
    },
    data() {
        let data = this.options;
        return {
            display_text: data.display_text || '未命名按钮',
            display_type: data.display_type || 'button', 
            href: data.href || undefined, 
            target: data.target || '_blank'
        }
    },
    methods: {
        click() {
            this.options.click && this.options.click() ;
        }
    }
})