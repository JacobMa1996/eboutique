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
EB.ajax = (url, data, func_succ, func_err, type) => {
    let options = {
        url: url,
        data: data,
        dataType: 'json',
        type: 'get' || type,
        contentType: 'application/json; chaset=utf-8',
        success: (res) => {
            if(res.status == 0) func_succ && func_succ(res)
            else func_err && func_err(res.message)
        },
        error: (res) => {
            func_err && func_err(res.message)
        }
    }

    let obj = arguments[0]

    if (typeof obj == 'object') {
        Object.assign(options, {
            url: obj.url,
            data: obj.data,
            type: 'get' || obj.type,
            success: obj.success,
            err: obj.err,
        })
    }
    
    $.ajax(options)
}
