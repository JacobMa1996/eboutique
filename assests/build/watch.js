// import { setTimeout } from 'timers';
const timers = require('timers')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const configFrontEnd = require('./webpack.frontend')
const configBackEnd = require('./webpack.backend')

let doing = false

module.exports = () => {
    fs.watch(path.join(__dirname, '../src/frontend'), {
        persistent: true, //watched continue to run
        recursive: true, //subdirectories should be watched
        encoding: 'utf8' 
    }, listenerFrontEnd)

    fs.watch(path.join(__dirname, '../src/backend'), {
        persistent: true, //watched continue to run
        recursive: true, //subdirectories should be watched
        encoding: 'utf8' 
    }, listenerBackEnd)
}

let end = (err, status) => {
    if(err) {
        console.log(err)
    }
    let t = (status.endTime - status.startTime) / 1000
    console.log('time:' + t + 's')
    doing = false
}

function listenerFrontEnd () {
    if(doing) return
    doing = true
    timers.setTimeout(() => {
        webpack(configFrontEnd).run(end)
    }, 500)
}

function listenerBackEnd () {
    if(doing) return
    doing = true
    timers.setTimeout(() => {
        webpack(configBackEnd).run(end)
    }, 500)
}


