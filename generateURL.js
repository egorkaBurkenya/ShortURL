const { Links } = require('./json')

module.exports.generateURL = (url) => {
    var random  = Math.floor(Math.random()*9000000) + 1000000;
    links = Links.open()
    let add = true
    let urlKey = ''
    for (key in links) {
        if (links[key] === url){
            add = false
            urlKey = key
        }
    } 
    if (add) {
        links[`link${random}`] = url
        Links.save(links)
        return `/link${random}`
    } else {
        return '/' + urlKey
    }
}