const path = require('path');
const cheerio = require('cheerio');
var through = require('through2');

const gulpVueSplit = function () {
    const cb = function (file, encoding, callback) {
        file.contents = new Buffer(cheerio.load(file.contents.toString())('script').html() || '');
        file.path = path.join(file.base, file.relative.slice(0, -3) + 'js');
        callback(null, file);
    };
    return through.obj(cb);
};
module.exports = gulpVueSplit;
