// import necessary modules
import http from 'http';
import fs from 'fs';

// creates server
http.createServer((req,res) => {
    // handles the different URLs
    if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('About Page');
        res.end();
    } else if (req.url === '/') {
        fs.readFile('home.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('404 Page Not Found');
        res.end();
    }
}).listen(3000);