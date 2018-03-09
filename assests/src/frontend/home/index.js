import '../../vueComponent'
import './index.scss'

$('.container').css({ 'min-height': common.pageWidthHeight().pageHeight - 240 })

new Vue({
    el: '#div',
    data: {
        actions: {
            display_text: '按钮', 
            display_type: 'link', 
            click() {
                console.log(1);
            }
            // href: '#', 
            // target: '_self'
        }
    }
})