const fs = require('fs');

module.exports.Links = {
    save: data => {
        fs.writeFileSync('./links.json', JSON.stringify(data))
    },
    open: () => {
        data = fs.readFileSync('./links.json')
        return JSON.parse(data)
    }
}