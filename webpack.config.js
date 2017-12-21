/*
    frontend页面 打包配置
*/
const path = require('path')
const fs = require('fs')

const srcPath = path.join(__dirname, '/assests/src/frontend/')
const distPath = path.join(__dirname, '/assests/dist/frontend/')

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
    let PageName = getSrcPageName(srcPath)
    let url = {}

    PageName.forEach( item => {
        url[item] = path.join(srcPath, item, `index.js`)
    })

    return url
}

console.log(getSrcPageName(srcPath))
console.log(getSrcPageEntries(srcPath))

module.exports = {
    entry: getSrcPageEntries(srcPath),
    output: {
        filename: '[name].js',
        path: distPath,
        publicPath: '/assests/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}