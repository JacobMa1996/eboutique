Vue.component('v-btn', {
    template: require('./template.html'), 
    props: {
        options: {}
    }, 
    data() {
        console.log(this);
        return {
            display_text: this.options.display_text || '未命名按钮'
        }
    }, 
    methods() {
        clickBtn: () => {

        }
    }
})