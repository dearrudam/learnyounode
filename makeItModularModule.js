


/**
 * Filter files from a given directory
 */
module.exports = function (directory, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(directory, function (err, data) {
        if (err) {
            callback(err);
        } else {
            var acceptedFiles = new Array();
            data.forEach(function (file) {
                if (path.extname(file).toLowerCase().endsWith(extension.toLowerCase())) {
                    acceptedFiles.push(file);
                }
            });
            callback(null, acceptedFiles);
        }
    });
};