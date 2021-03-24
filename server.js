const http = require('http');
const fs = require('fs');
const lodash = require('lodash');

const server = http.createServer((req, res) => {
    const num = lodash.random(1, 100);
    console.log(num);
    
    res.setHeader('content-type', 'text/html');
    
    let path = './views/';
    switch (req.url) {
        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/home' :
            res.setHeader('Location', '/');
            res.statusCode = 301;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
        }
        
        res.end();
    });
});

server.listen(5000, 'localhost', () => {
    console.log('Listening on port 5000 ...');
});
