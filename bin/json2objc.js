#!/usr/bin/env node

var Translate = require('../')

var argv = process.argv;
argv.shift();
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var server_port = 3000;
var pre = '';

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-h'  || _argv == '--help'){
    console.log(' json2objc jsonfile')
  }
}

if ( argv.length > 1 ) {

}

for(var i in argv){
  var jsonfile = argv[i];
  console.log(jsonfile)
  dump(require(current_path + '/'+jsonfile));
}


function dump(obj){
  Translate.obj = obj;
  Translate.dump();
  Translate.attr();
  Translate.syn();
  Translate.assign();
  
  Translate.assign(true);
}

