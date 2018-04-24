window.EB = {}

//Ajax
EB.ajax = function (url, data, func_succ, func_err, method) {
    let options = {}
    let obj = arguments[0]

    if (obj && typeof obj == 'object') {
        Object.assign(options, {
            url: obj.url,
            data: obj.data,
            method: obj.method || 'get',
            success: (res) => {
                if (res.status == 0) obj.success && obj.success(res)
                else obj.error && obj.error(res.message)
            },
            err: obj.err,
        })
    } else {
        options = {
            url: url,
            data: data,
            dataType: 'json',
            method: method || 'get',
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

// getQuery
EB.query = function (queryStr, url) {
    let value = '格式错误'
    if(!queryStr || !url) {
        return value
    }
    let query = url.split('?')[1]
    let queryArr = query.split('=')
    if (queryArr[0] === queryStr) {
        value = queryArr[1]
    }
    return value
}

//
EB.logOut = function () {
    EB.ajax({
        url: '/api/common/logOut',
        method: 'get',
        success (res) {
            alert('注销成功')
            location.reload()
        },
        error (err) {
            console.log(err)
        }
    })
}