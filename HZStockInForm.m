//
//  HZStockInForm.m
//  hz
//
//  Created by sangalfred on 1/5/16.
//  Copyright © 2016 aircos. All rights reserved.
//

#import "HZStockInForm.h"

@implementation sss

// @synthesize product_ids;
// @synthesize stock_room_id;
// @synthesize stock_room_address;
// @synthesize stock_room_tel;
// @synthesize stock_room_name;
// @synthesize stock_room_type;
// @synthesize stock_room_mobile;
// @synthesize stock_room_contact;
// @synthesize products_infov;
// @synthesize user_name;
// @synthesize user_mobile;

@synthesize tid;
@synthesize uid;
@synthesize pid;
@synthesize longitude;
@synthesize latitude;
@synthesize continent;
@synthesize country;
@synthesize city;
@synthesize content;
@synthesize created_at;
@synthesize favour_num;
@synthesize updated_at;
@synthesize pic;

// - (id) initWithDict:(NSDictionary *)dict{
//     if(![[dict objectForKey:@"product_ids"] isKindOfClass:[NSNull class]]){
//         self.product_ids = (NSDictionary *)[dict objectForKey:@"product_ids"];
//     }
//     if(![[dict objectForKey:@"stock_room_id"] isKindOfClass:[NSNull class]]){
//         self.stock_room_id = (NSString *)[dict objectForKey:@"stock_room_id"];
//     }
//     if(![[dict objectForKey:@"stock_room_address"] isKindOfClass:[NSNull class]]){
//         self.stock_room_address = (NSString *)[dict objectForKey:@"stock_room_address"];
//     }
//     if(![[dict objectForKey:@"stock_room_tel"] isKindOfClass:[NSNull class]]){
//         self.stock_room_tel = (int)[dict objectForKey:@"stock_room_tel"];
//     }
//     if(![[dict objectForKey:@"stock_room_name"] isKindOfClass:[NSNull class]]){
//         self.stock_room_name = (NSString *)[dict objectForKey:@"stock_room_name"];
//     }
//     if(![[dict objectForKey:@"stock_room_type"] isKindOfClass:[NSNull class]]){
//         self.stock_room_type = (int)[dict objectForKey:@"stock_room_type"];
//     }
//     if(![[dict objectForKey:@"stock_room_mobile"] isKindOfClass:[NSNull class]]){
//         self.stock_room_mobile = (NSString *)[dict objectForKey:@"stock_room_mobile"];
//     }
//     if(![[dict objectForKey:@"stock_room_contact"] isKindOfClass:[NSNull class]]){
//         self.stock_room_contact = (NSString *)[dict objectForKey:@"stock_room_contact"];
//     }
//     if(![[dict objectForKey:@"products_infov"] isKindOfClass:[NSNull class]]){
//         self.products_infov = (NSDictionary *)[dict objectForKey:@"products_infov"];
//     }
//     if(![[dict objectForKey:@"user_name"] isKindOfClass:[NSNull class]]){
//         self.user_name = (NSString *)[dict objectForKey:@"user_name"];
//     }
//     if(![[dict objectForKey:@"user_mobile"] isKindOfClass:[NSNull class]]){
//         self.user_mobile = (NSString *)[dict objectForKey:@"user_mobile"];
//     }
//
//     return self;
// }

- (id) initWithDict:(NSDictionary *)dict{
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.tid = (int)[dict objectForKey:@"tid"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.uid = (int)[dict objectForKey:@"uid"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.pid = (int)[dict objectForKey:@"pid"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.longitude = (NSString *)[dict objectForKey:@"longitude"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.latitude = (NSString *)[dict objectForKey:@"latitude"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.continent = (NSString *)[dict objectForKey:@"continent"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.country = (NSString *)[dict objectForKey:@"country"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.city = (NSString *)[dict objectForKey:@"city"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.content = (NSString *)[dict objectForKey:@"content"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.created_at = (NSString *)[dict objectForKey:@"created_at"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.favour_num = (NSString *)[dict objectForKey:@"favour_num"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.updated_at = (NSString *)[dict objectForKey:@"updated_at"];
  }
  if(![[dict objectForKey:@"'+ k + '"] isKindOfClass:[NSNull class]]){
    self.pic = (NSString *)[dict objectForKey:@"pic"];
  }

  return self;
}



@end
