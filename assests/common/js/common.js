let common = {}

//返回页面的宽和高
common.pageWidthHeight = () => {
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