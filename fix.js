var fs = require('fs');
var pack = require('./package');
var npm = require('npm');
var arrays = require('async-arrays');
var intersect = require('array-intersection');

var packages = [];
if(pack.dependencies)
    packages = packages.concat(Object.keys(pack.dependencies));
if(pack.peerDependencies)
    packages = packages.concat(Object.keys(pack.peerDependencies));
if(pack.devDependencies)
    packages = packages.concat(Object.keys(pack.devDependencies));
if(pack.optionalDependencies)
    packages = packages.concat(Object.keys(pack.optionalDependencies));
fs.readdir('..', function(err, files){
    var linkables = intersect(files, packages);
    npm.load({
        loaded: false
    }, function (err) {
        arrays.forEachEmission(linkables, function(packageName, index, done){
            npm.commands.link(packageName, done)
        }, function(){
            console.log('linked: '+linkables.join(', '));
        });
    });
});
