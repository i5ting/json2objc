# json2objc


Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/json2objc.svg)](https://david-dm.org/i5ting/json2objc) 
[![npm](https://img.shields.io/npm/v/json2objc.svg)](https://www.npmjs.com/package/json2objc)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/json2objc/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/json2objc.svg)](https://www.npmjs.com/package/json2objc)


## Install

    [sudo]npm install -g json2objc

## Usage 

```
json2objc
```

## Examples

```
➜  json2obj git:(master) json2objc user.json 
user.json
{
    "uid": 1,
    "username": "tanjw",
    "email": "email@t.com",
    "mobile": "13671286666",
    "headface": null,
    "created_at": "2015-09-05 03:15:51",
    "last_login_time": "2015-11-29 01:32:44",
    "last_ip": 167903491,
    "last_gps": "",
    "weixin_openid": "oRhdzt_Z52-P5t4qh-JpN7OA2Qx4",
    "updated_at": "2015-11-29 01:32:44"
}


@property(nonatomic,assign) int uid;
@property(nonatomic,copy) NSString *username;
@property(nonatomic,copy) NSString *email;
@property(nonatomic,copy) NSString *mobile;
@property(nonatomic,copy) NSDictionary *headface;
@property(nonatomic,copy) NSString *created_at;
@property(nonatomic,copy) NSString *last_login_time;
@property(nonatomic,assign) int last_ip;
@property(nonatomic,copy) NSString *last_gps;
@property(nonatomic,copy) NSString *weixin_openid;
@property(nonatomic,copy) NSString *updated_at;


@synthesize uid;
@synthesize username;
@synthesize email;
@synthesize mobile;
@synthesize headface;
@synthesize created_at;
@synthesize last_login_time;
@synthesize last_ip;
@synthesize last_gps;
@synthesize weixin_openid;
@synthesize updated_at;



```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
