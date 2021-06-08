const express = require('express')
const { generateURL } = require('./generateURL')
const { Links } = require('./json')

const port = 3000
const app = express()

app.listen(port, () => console.log(`Listen... localhost:${port}`))


app.get('/', (req, res) => {
    res.status(200)
    console.log(__dirname, '/public/index.html');
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/create', (req, res) =>{
    shortUrl = generateURL(req.query.url)
    res.status(200)
    res.send({"link": shortUrl});
})

app.get('/:shortUrl', (req, res) =>{
    const links = Links.open()
    if (links[req.params.shortUrl] != undefined) {
        res.status(200)
        res.redirect(links[req.params.shortUrl]);
    } else {
        res.status(404)
        res.send('not found')
    }
})