var net = require('net');

function currentDatetime() {

    var zerofill = function (number) {
        return (number < 10 ? '0' : '') + String(number);
    };

    var now = new Date();

    var year = now.getFullYear();
    var month = zerofill(now.getMonth() + 1);
    var dayOfMonth = zerofill(now.getDate());
    var hour = zerofill(now.getHours());
    var minutes = zerofill(now.getMinutes());

    return year + "-" + month + "-" + dayOfMonth + " " + hour + ":" + minutes;
}

var server = net.createServer(function (socket) {
    socket.end(currentDatetime() + "\n");
});

server.listen(process.argv[2]);


//// Here's the official solution in case you want to compare notes:
//// ─────────────────────────────────────────────────────────────────────────────
// 
// var net = require('net')
// 
// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i
// }
// 
// function now() {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
// }
// 
// var server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })
// 
// server.listen(Number(process.argv[2]))