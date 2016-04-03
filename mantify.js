// A simple utility script to browserify documents as we want
import fs from 'fs';
import browserify from 'browserify';
import path from 'path';
import mkdirp from 'mkdirp';

const files = process.argv.slice(3);
const output = process.argv[2];
const options = {};

mkdirp.sync(path.dirname(output));

let b = browserify(files, options)
.transform('babelify', JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'))));

if (process.env.UGLIFYIFY) {
  b = b.transform({
    global: true,
  }, 'uglifyify');
}

b.bundle().pipe(fs.createWriteStream(output));
