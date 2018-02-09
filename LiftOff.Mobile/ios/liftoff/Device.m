//
//  Device.m
//  liftoff
//
//  Created by Toma Puljak on 2/2/18.
//  Copyright © 2018 650 Industries, Inc. All rights reserved.
//

#import "Device.h"

@implementation Device
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(deviceName:(RCTResponseSenderBlock)callback) {
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[deviceName]);
}

@end
