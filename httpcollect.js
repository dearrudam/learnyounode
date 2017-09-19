var http = require('http');
var url = process.argv[2];

var responseLength = 0;
var responseContent = '';
http.get(url, function (response) {
    response
        .setEncoding('utf8')
        .on('error', console.error)
        .on('data', function (data) {
            responseLength += data.length;
            responseContent += data.toString();
        })
        .on('end', function () {
            console.log(responseLength);
            console.log(responseContent);
        })
});

/**
 * Official result
 */

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
