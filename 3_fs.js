var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('fs_1.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var createStream = fs.createWriteStream("fs_2.txt");
        createStream.write(data);
        createStream.write("Thank You.");
        createStream.end();
        res.end();
    });
}).listen(3001);
