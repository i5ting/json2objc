#!/usr/bin/env node

var tpl = require('tpl_apply')
var Translate = require('../')

var argv = process.argv;
argv.shift();
argv.shift();

var file_path = __dirname;

var home_arr = __dirname.split('/');
home_arr.pop();
var home_path = home_arr.join('/');

console.log(home_path)

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
  // console.log(jsonfile)
  dump(require(current_path + '/'+jsonfile));
}


function dump(obj){
  Translate.obj = obj;
  Translate.dump();
  var attrs = Translate.attr();
  var synthesize_attrs = Translate.syn();
  Translate.assign();
  
  var init_with_dict= Translate.assign(true);
  
  // console.log(obj)

  
  
  var c = {
    fileName:'sss',
    attrs:attrs.join('\n'),
    synthesize_attrs:synthesize_attrs.join('\n'),
    init_with_dict: init_with_dict.join('\n')
  }
  
  console.log(attrs)
  
  generate(c);
}

function generate(obj){
  var Handlebars = require('handlebars');

  Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
      out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
  });

  var source_array = ['HZStockInForm.h', 'HZStockInForm.m']

  source_array.forEach(function(item){
    var source = home_path + '/tpl/' + item;
  
    tpl.tpl_apply_with_register_helper(Handlebars, source, obj, process.cwd() + '/' + item);
  })
}

