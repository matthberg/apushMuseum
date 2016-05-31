var pug = require('pug');
var fs = require('fs');
var locals = require('./settings.json');
console.log('Loaded requirements...');
// Compile a function
var fn = pug.compileFile('./index.pug');
console.log('Safely through pug...');
// Render and save
var html = fn(locals);
fs.writeFileSync('index.html', html);
console.log('Saved!');