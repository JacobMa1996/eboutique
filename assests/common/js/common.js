window.EB = {}

//返回页面的宽和高
EB.pageWidthHeight = () => {
    let page = {}
    if (document.compatMode == 'CSS1Compat') {
        page.pageWidth = document.documentElement.clientWidth
        page.pageHeight = document.documentElement.clientHeight
    } else {
        page.pageWidth = document.body.clientWidth
        page.pageHeight = document.body.clientHeight
    }
    return page
}

//Ajax
EB.ajax = function (url, data, func_succ, func_err, type) {
    let options = {}
    let obj = arguments[0]

    if (obj && typeof obj == 'object') {
        Object.assign(options, {
            url: obj.url,
            data: obj.data,
            type: obj.type || 'get',
            success: obj.success,
            err: obj.err,
        })
    } else {
        options = {
            url: url,
            data: data,
            dataType: 'json',
            type: 'get' || type,
            contentType: 'application/json; chaset=utf-8',
            success: (res) => {
                if (res.status == 0) func_succ && func_succ(res)
                else func_err && func_err(res.message)
            },
            error: (res) => {
                func_err && func_err(res.message)
            }
        }
    }

    $.ajax(options)
}
