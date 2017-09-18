var fs = require("fs");

fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err;
    for (var i = 0; i < list.length; i++) {
        if (new RegExp('^.*\.' + process.argv[3] + "$", "i").test(list[i])) {
            console.log(list[i]);
        }
    }
});