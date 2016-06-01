var pug = require('pug');
var fs = require('fs');
var less = require('less');
var locals = require('./settings.json');
console.log('Loaded requirements...');
// Less
less.render(fs.readFileSync('./css/stylesheet.less'),function(error, output) {fs.writeFileSync('});

var fn = pug.compileFile('./index.pug');
console.log('Safely through pug...');
// Render and save
var html = fn(locals);
fs.writeFileSync('../apushMuseumCompile/index.html', html);
fs.writeFileSync('../apushMuseumCompile/js/smoothscroll.js',fs.readFileSync('./node_modules/smoothscroll/smoothscroll.min.js'));
fs.writeFileSync('../apushMuseumCompile/css/flexboxgrid.css',fs.readFileSync('./node_modules/flexboxgrid/dist/flexboxgrid.min.css'));
console.log('Saved!');