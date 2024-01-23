import http from 'http';
import fs from 'fs';

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/htm'});
    res.write('Hello World!');
    res.end();
}).listen(3000);