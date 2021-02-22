#!/usr/bin/env node
var pack = require(process.cwd()+'/package');
var link = require('./linker');
link(pack, function(err, linked){
    console.log('linked: '+linked.join(', '));
});
