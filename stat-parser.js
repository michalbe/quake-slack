const path = require('path')
const fs = require('fs')

const dirpath = path.join(__dirname, '/demos')
const processed_files = fs.readFileSync('processed_files').toString().split('\n');
const files = fs.readdirSync(dirpath);
const new_file = files.filter(el => /\.txt$/.test(el)).find(el => !processed_files.includes(el));

const stats = fs.readFileSync(path.join(dirpath, new_file));

console.log(stats.toString());
