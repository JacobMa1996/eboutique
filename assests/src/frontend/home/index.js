import '../../vueComponent'
import './index.scss'

$('.container').css({ 'min-height': common.pageWidthHeight().pageHeight - 240 })

new Vue({
    el: '#div',
    data: {
        btn_options: {
            // display_text: '按钮'
        }
    }
})