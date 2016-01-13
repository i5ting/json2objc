var js2objc = {
  "string" : function(str){
    return "@property(nonatomic,copy) NSString *" + str + ";"
  },
  "array" : function(str){
    return "@property(nonatomic,copy) NSArray *" + str + ";"
  },
  "object" : function(str){
    return "@property(nonatomic,copy) NSDictionary *" + str + ";"
  },
  "number":function(str){
    return "@property(nonatomic,assign) int " + str + ";"
  },
  "date":function(str){
    return "@property(nonatomic,copy) NSDate *" + str + ";"
  },
  "boolean":function(str){
    return "@property(nonatomic,assign) BOOL " + str + ";"
  },
  "other" : function(str){
    return "@property(nonatomic,copy) NSString *" + str + ";"
  },
}

var js2objc_assign = {
  "string" : function(str){
    return "self." + str + " = (NSString *)[dict objectForKey:@\"" + str + "\"];" 
  },
  "array" : function(str){
    return "self." + str + " = (NSArray *)[dict objectForKey:@\"" + str + "\"];" 
  },
  "object" : function(str){
    return "self." + str + " = (NSDictionary *)[dict objectForKey:@\"" + str + "\"];" 
  },
  "number":function(str){
    return "self." + str + " = (int)[dict integerValueForKey:@\"" + str + "\" default:0];" 
  },
  "date":function(str){
    return "self." + str + " = (NSDate *)[dict objectForKey:@\"" + str + "\"];" 
  },
  "boolean":function(str){
    return "self." + str + " = (BOOL)[dict boolValueForKey:@\"" + str + "\" default:false];" 
  },
  "other" : function(str){
    return "self." + str + " = (NSString *)[dict objectForKey:@\"" + str + "\"];" 
  },
}

var Translate = {
  obj:{},
  dump: function(){
    var newstring = "";
    newstring += (JSON.stringify(this.obj, null, 4));
    newstring += ('\n');
    // console.log(newstring)
  },
  attr:function(){
    var arr = [];
    for(var k in this.obj){
      var v = this.obj[k];
      // newstring += (typeof v)
    
      if(v && js2objc[typeof v]){
        var str = js2objc[typeof v](k);
        arr.push(str);
      }else{
        var str = js2objc['other'](k);
        arr.push(str);
      }
    }
    
    return arr;
  },
  //@synthesize
  syn:function(){
    var arr = [];
    for(var k in this.obj){
      var v = this.obj[k];
      // newstring += (typeof v)
    
      if(js2objc[typeof v]){
        var str = "@synthesize " + k + ";";
        arr.push(str)
      }
    }
    
    return arr;
  },
  //@synthesize
  assign:function(safe){
    var arr = [];
    arr.push('- (id) initWithDict:(NSDictionary *)dict{');
    for(var k in this.obj){
      var v = this.obj[k];
      // newstring += (typeof v)
    
      if(v && js2objc_assign[typeof v]){
        var str = js2objc_assign[typeof v](k);
        if(safe){
          w(k, str);
        }else{
          arr.push(str)
        }
      }else{
        var str = js2objc_assign['other'](k);
        if(safe){
          w(k, str);
        }else{
          arr.push(str)
        }
      }
    }
    arr.push('')
    arr.push('  return self;')
    arr.push('}')
    
    function w(k, str){
      arr.push("  if(![[dict objectForKey:@\""+ k + "\"] isKindOfClass:[NSNull class]]){")
      arr.push('    ' + str)
      arr.push('  }')
    }
    arr.push('\n');
    return arr;
  }
}

module.exports = Translate;