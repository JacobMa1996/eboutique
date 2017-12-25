
const path = require('path')
const fs = require('fs')
const srcPathFrontend = path.join(__dirname, '../src/frontend/')
const srcPathBackend = path.join(__dirname, '../src/backend/')
function getSrcPageName(srcPath) {
    let PageName = []
    let files = fs.readdirSync(srcPath)
    if (!files.length) {
        return console.log('error: no static sources')
    }
    for (let i = 0; i < files.length; i++) {
        if (fs.statSync(path.join(srcPath, files[i])).isDirectory() && files[i] != 'common') {
            PageName.push(files[i])
        }
    }
    return PageName
}

function getSrcPageEntries(srcPath) {
    let PageName = [],
        url = {}
    PageName = getSrcPageName(srcPath)
    if (!PageName || !PageName.length) {
        return
    }
    PageName.forEach(item => {
        url[item] = path.join(srcPath, item, `index.js`)
    })
    return url
}

let entryFrontend = getSrcPageEntries(srcPathFrontend)
let entryBackend = getSrcPageEntries(srcPathBackend)

module.exports = {
    enrtryFrontend: entryFrontend,
    entryBackend: entryBackend
}