var pug = require('pug');
var fs = require('fs');
var less = require('less');
var locals = require('./settings.json');
console.log('Loaded requirements...');
// Less & Pug
less.render(fs.readFileSync('./css/stylesheet.less').toString(),function(error, output) {fs.writeFileSync('../apushMuseumCompile/css/stylesheet.css', output)});
console.log('Safely through less...');
var fn = pug.compileFile('./index.pug');
console.log('Safely through pug...');
// Render and save
var html = fn(locals);
fs.writeFileSync('../apushMuseumCompile/index.html', html);
fs.writeFileSync('../apushMuseumCompile/js/smoothscroll.js',fs.readFileSync('./node_modules/smoothscroll/smoothscroll.min.js'));
fs.writeFileSync('../apushMuseumCompile/js/script.js',fs.readFileSync('./js/script.js'));
console.log('Saved!');