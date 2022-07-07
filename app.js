const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.get('/pricing', function (req, res) {
    res.render('pricing');
})

app.get('/download', function (req, res) {
    res.render('download');
})


app.listen(3000, function () {
    console.log('Server started on port 3000');
})