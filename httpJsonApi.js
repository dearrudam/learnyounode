var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {

    var responseContent;

    function getdate(currentURL) {
        var parsedUrl = url.parse(currentURL, true);
        if (parsedUrl.query.iso) {
            return new Date(parsedUrl.query.iso);
        }
        return false;
    }

    function parsetime(datetime) {
        if (datetime) {
            return JSON.stringify({
                'hour': datetime.getHours()
                , 'minute': datetime.getMinutes()
                , 'second': datetime.getSeconds()
            });
        }
    }

    function unixtime(datetime) {
        if (datetime) {
            return JSON.stringify({
                'unixtime': datetime.getTime()
            });
        }
    }

    if (/^\/api\/parsetime/.test(request.url)) {
        responseContent = parsetime(getdate(request.url));
    } else if (/^\/api\/unixtime/.test(request.url)) {
        responseContent = unixtime(getdate(request.url));
    } else {
        response.writeHead(404, {});
        return response.end();
    }

    if (responseContent) {
        response.writeHead(200, {
            'content-type': 'application/json'
            , 'content-length': responseContent.length
        });
        return response.end(responseContent);
    } else {
        response.writeHead(400, {});
        return response.end();
    }
});

server.listen(process.argv[2]);
