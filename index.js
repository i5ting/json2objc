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
    return "self." + str + " = (int)[dict objectForKey:@\"" + str + "\"];" 
  },
  "date":function(str){
    return "self." + str + " = (NSDate *)[dict objectForKey:@\"" + str + "\"];" 
  },
  "boolean":function(str){
    return "self." + str + " = (BOOL)[dict objectForKey:@\"" + str + "\"];" 
  },
  "other" : function(str){
    return "self." + str + " = (NSString *)[dict objectForKey:@\"" + str + "\"];" 
  },
}

var Translate = {
  obj:{},
  dump: function(){
    console.log(JSON.stringify(this.obj, null, 4));
    console.log('\n');
  },
  attr:function(){

    for(var k in this.obj){
      var v = this.obj[k];
      // console.log(typeof v)
    
      if(v && js2objc[typeof v]){
        var str = js2objc[typeof v](k);
        console.log(str)
      }else{
        var str = js2objc['other'](k);
        console.log(str)
      }
    }
    
    console.log('\n');
  },
  //@synthesize
  syn:function(){
    for(var k in this.obj){
      var v = this.obj[k];
      // console.log(typeof v)
    
      if(js2objc[typeof v]){
        var str = "@synthesize " + k + ";";
        console.log(str)
      }
    }
    
    console.log('\n');
  },
  //@synthesize
  assign:function(){
    for(var k in this.obj){
      var v = this.obj[k];
      // console.log(typeof v)
    
      if(v && js2objc_assign[typeof v]){
        var str = js2objc_assign[typeof v](k);
        console.log(str)
      }else{
        var str = js2objc_assign['other'](k);
        console.log(str)
      }
    }
    
    console.log('\n');
  }
}

module.exports = Translate;