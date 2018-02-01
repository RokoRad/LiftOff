// Copyright 2015-present 650 Industries. All rights reserved.

#import "AppDelegate.h"
#import "ExpoKit.h"
#import "EXViewController.h"

@interface AppDelegate () <WCSessionDelegate> {
    
    WCSession *session;
}

@property (nonatomic, strong) EXViewController *rootViewController;
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    _window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    _window.backgroundColor = [UIColor whiteColor];
    [[ExpoKit sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    _rootViewController = [ExpoKit sharedInstance].rootViewController;
    _window.rootViewController = _rootViewController;
    
    [_rootViewController loadReactApplication];
    [_window makeKeyAndVisible];
    
    if ([WCSession isSupported]) {
        [WCSession defaultSession].delegate = self;
        session = [WCSession defaultSession];
        session.delegate = self;
        [[WCSession defaultSession] activateSession];
    }
    
    return YES;
}

#pragma mark - Handling URLs

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation
{
    return [[ExpoKit sharedInstance] application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray * _Nullable))restorationHandler
{
    return [[ExpoKit sharedInstance] application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
}

#pragma mark - Notifications

- (void)application:(UIApplication *)application didReceiveLocalNotification:(nonnull UILocalNotification *)notification
{
    [[ExpoKit sharedInstance] application:application didReceiveLocalNotification:notification];
}

- (void)session:(nonnull WCSession *)session activationDidCompleteWithState:(WCSessionActivationState)activationState error:(nullable NSError *)error {
    [session updateApplicationContext:@{@"DeviceName": [[UIDevice currentDevice] name]} error: nil];
}

- (void)sessionDidBecomeInactive:(nonnull WCSession *)session {}

- (void)sessionDidDeactivate:(nonnull WCSession *)session {}

@end
