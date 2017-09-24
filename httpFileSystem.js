var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var stats = fs.statSync(process.argv[3]);
    response.writeHead(200, { 'content-type': 'text/plain', 'content-lenght': stats.size });
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);
