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
  }
}

module.exports = Translate;