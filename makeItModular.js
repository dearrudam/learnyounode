var listFilesFn = require('./makeItModularModule.js');
var directory = process.argv[2];
var filter = process.argv[3];
listFilesFn(directory, filter, function (err, files) {
    if (err) {
        return console.error('There was an error:', err)
    }
    files.forEach(function (item) {
        console.log(item);
    });
});