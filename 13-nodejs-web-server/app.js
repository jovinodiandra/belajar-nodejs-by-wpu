const http = require('node:http')
const fs = require('fs')

const port = 3000;

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead('404');
            res.write('Error: file not found')
        } else {
            res.write(data);
        }
        res.end();
    });
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })

    const url = req.url

    switch (url) {
        case '/about':
            renderHtml('./about.ejs', res);
            break;
        case '/contact':
            renderHtml('./contact.ejs', res);
            break;
        default : {
            renderHtml('./index.ejs', res);
        }

    }


    // if (url === '/about') {
    //     renderHtml('./about.ejs', res)
    // } else if (url === '/contact') {
    //     renderHtml('./contact.ejs', res)
    // } else {
    //     renderHtml('./index.ejs', res)
    // }

}).listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});