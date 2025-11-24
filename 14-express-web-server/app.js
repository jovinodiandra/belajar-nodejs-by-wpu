const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.json({
    //     nama: 'Joko',
    //     email: 'jomo@mple.com',
    //     noHP: '081234567'
    // })

    res.sendFile('./index.ejs', {root: __dirname});
})

app.get('/about', (req, res) => {
    // res.send('Ini halaman about')
    res.sendFile('./about.ejs', {root: __dirname});
})


app.get('/contact', (req, res) => {
    // res.send('Ini halaman contact')
    res.sendFile('./contact.ejs', {root: __dirname});
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


// const http = require('node:http')
// const fs = require('fs')
//
// const port = 3000;
//
// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead('404');
//             res.write('Error: file not found')
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// }
//
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html'
//     })
//
//     const url = req.url
//
//     switch (url) {
//         case '/about':
//             renderHtml('./about.ejs', res);
//             break;
//         case '/contact':
//             renderHtml('./contact.ejs', res);
//             break;
//         default : {
//             renderHtml('./index.ejs', res);
//         }
//
//     }
//
//
//     // if (url === '/about') {
//     //     renderHtml('./about.ejs', res)
//     // } else if (url === '/contact') {
//     //     renderHtml('./contact.ejs', res)
//     // } else {
//     //     renderHtml('./index.ejs', res)
//     // }
//
// }).listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
// });