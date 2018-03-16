import '../../vueComponent'
import './index.scss'

$('.container').css({ 'min-height': EB.pageWidthHeight().pageHeight - 240 })

window.vm = new Vue({
    el: '#div',
    data () {
        return {
            text: '123',
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
    }
})