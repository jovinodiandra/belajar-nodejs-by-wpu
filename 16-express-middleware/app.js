const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const {static} = require("express");
const morgan = require('morgan')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

// third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'))

//built-in middleware
app.use(static('public'))

//application-level middleware
app.use((req, res, next) => {
    console.log('Time: ' , Date.now());
    next();
})

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Joko',
            email: 'joko@mail.com'
        },
        {
            nama: 'Rudy',
            email: 'rudy@mail.com'
        },
        {
            nama: 'Mial',
            email: 'mial@mail.com'
        },
    ]
    res.render('index',
        {
            nama: 'Jobio',
            title: 'Halaman Home',
            mahasiswa,
            layout: 'layouts/main-layout',
        })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman about'
    })
})


app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman contact'
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`)
})


app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1> 404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
