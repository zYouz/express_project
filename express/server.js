const express = require('express')
const app = express()
const port = 4000;

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css')
})
app.get('/public/img/close.png', (req, res) => {
    res.sendFile(__dirname + './close.html')
})
app.use((req, res, next) => {
    let hours = new Date().getHours()
    let day = new Date().getDay()
    if ((hours < 9 || hours > 17) || (day == 6 || day == 0)) {
        res.sendFile(__dirname + './close.html')
    }
    else next()
})

app.use(express.static(__dirname + '/public'));

app.listen(port, (err) => {
    err ? console.log(err) : console.log('the server running on port', port)
})