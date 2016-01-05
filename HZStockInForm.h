//
//  HZStockInForm.h
//  hz
//
//  Created by sangalfred on 1/5/16.
//  Copyright © 2016 aircos. All rights reserved.
//

#import "HZBaseModel.h"

@interface sss : HZBaseModel

// @property(nonatomic,copy) NSDictionary *product_ids;
// @property(nonatomic,copy) NSString *stock_room_id;
// @property(nonatomic,copy) NSString *stock_room_address;
// @property(nonatomic,assign) int stock_room_tel;
// @property(nonatomic,copy) NSString *stock_room_name;
// @property(nonatomic,assign) int stock_room_type;
// @property(nonatomic,copy) NSString *stock_room_mobile;
// @property(nonatomic,copy) NSString *stock_room_contact;
// @property(nonatomic,copy) NSDictionary *products_infov;
// @property(nonatomic,copy) NSString *user_name;
// @property(nonatomic,copy) NSString *user_mobile;

@property(nonatomic,assign) int tid;
@property(nonatomic,assign) int uid;
@property(nonatomic,assign) int pid;
@property(nonatomic,copy) NSString *longitude;
@property(nonatomic,copy) NSString *latitude;
@property(nonatomic,copy) NSString *continent;
@property(nonatomic,copy) NSString *country;
@property(nonatomic,copy) NSString *city;
@property(nonatomic,copy) NSString *content;
@property(nonatomic,copy) NSString *created_at;
@property(nonatomic,copy) NSString *favour_num;
@property(nonatomic,copy) NSString *updated_at;
@property(nonatomic,copy) NSString *pic;
 

@end
