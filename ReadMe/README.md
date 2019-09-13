

## SetUp Branch IO:-

### Steps

#### Complete your Branch Dashboard

![Alt text](/configureDashBoard.png?raw=true "Optional Title")



### Create your project

  

set up link for ios & android link redirection

  

after Complete Dashboard setUp


#### Configure app[¶](https://docs.branch.io/apps/react-native/#configure-app "Permanent link")

-   #### iOS[¶](https://docs.branch.io/apps/react-native/#ios "Permanent link")
    
    -   Configure bundle identifier
        
        -   Bundle Id matches  [Branch Dashboard](https://dashboard.branch.io/settings/link)
      
   ![Alt text](/ios-bundle-id.png?raw=true "Optional Title")
      
 ### Configure associated domains

-   Add your link domains from your  [Branch Dashboard](https://dashboard.branch.io/settings/link)
-   `-alternate`  is needed for Universal Linking with the  [Web SDK](https://docs.branch.io/web/integrate/)  inside your Website
-   `test-`  is needed if you need use a  [test key](https://docs.branch.io/apps/react-native/#use-test-key)
-   If you use a  [custom link domain](https://docs.branch.io/dashboard/integrate/#change-link-domain), you will need to include your old link domain, your  `-alternate`  link domain, and your new link domain

   ![Alt text](/ios-entitlements.png?raw=true "Optional Title")
 
### Configure entitlements

-   Confirm entitlements are within target
   
      ![Alt text](/ios-package.png?raw=true "Optional Title")
    
###  Configure Info.plist

-   Add  [Branch Dashboard](https://dashboard.branch.io/account-settings/app)  values
    
    -   Add  `branch_app_domain`  with your live key domain
    -   Add  `branch_key`  with your current Branch key
    -   Add your URI scheme as  `URL Types`  ->  `Item 0`  ->  `URL Schemes`
    
    ![Alt text](/ios-plist.png?raw=true "Optional Title")
    
    
 ### Confirm app prefix

  - From your  [Apple Developer Account]
  
  ![Alt text](/ios-team-id.png?raw=true "Optional Title")
  
  **Install Branch**
  Pure React Native App

-   Install the module
-   Yarn|NPM  
   
```markdown
  npm install  react-native-branch

  Run react-native link react-native-branch
```
-   Native iOS app with CocoaPods
-   Add these lines to your Podfile  

```
pod 'react-native-branch', path: '../node_modules/react-native-branch'
pod 'Branch-SDK', path: '../node_modules/react-native-branch/ios' or pod 'Branch', '0.27.1'  
```
Run pod install to regenerate the Pods project with the new dependencies. Note that the location of node_modules relative to your Podfile may vary.

 & (Optional) Add a branch.json file to the root of your app (next to package.json). See [https://rnbranch.app.link/branch-json](https://rnbranch.app.link/branch-json).  


   **Initialize Branch**

   **iOS**

-   If you are using Swift, add #import <react-native-branch/RNBranch.h> to your Bridging header if you have one.
-   If you are using the React pod in a native app with use_frameworks!, you may simply use a Swift import in the AppDelegate.swift: import react_native_branch


```
 #import <react-native-branch/RNBranch.h> // at the top in AppDelegate.m file

   // Initialize the Branch Session at the top of existing application:didFinishLaunchingWithOptions:
   - (BOOL)application:(UIApplication *)application  didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
   {
   // Uncomment this line to use the test key instead of the live one.
   // [RNBranch useTestInstance];
   [RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES]; // <-- add this
   NSURL *jsCodeLocation;
   //...
   }

   - (BOOL)application:(UIApplication *)app  openURL:(NSURL *)url  options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
   if (![RNBranch.branch application:app openURL:url options:options]) {
   // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
   }
   return  YES;
   }

   - (BOOL)application:(UIApplication *)application  continueUserActivity:(NSUserActivity *)userActivity  restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
   return [RNBranch continueUserActivity:userActivity];
   }
```

ref link: <https://reactnavigation.org/docs/en/getting-started.html>


## **Android**

   **AndroidManifest.xml**  

``` 
<?xml version="1.0" encoding="utf-8"?>
   <manifest  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.eneff.branchandroid">

   <uses-permission  android:name="android.permission.INTERNET"  />

   <application
   android:allowBackup="true"
   android:name="com.eneff.branchandroid.CustomApplicationClass"
   android:icon="@mipmap/ic_launcher"
   android:label="@string/app_name"
   android:supportsRtl="true"
  android:theme="@style/AppTheme">

  <activity
   android:name=".MainActivity"
   android:launchMode="singleTask"
   android:label="@string/app_name"
   android:theme="@style/AppTheme.NoActionBar">

   <intent-filter>
   <action  android:name="android.intent.action.MAIN"  />
   <category  android:name="android.intent.category.LAUNCHER"  />
   </intent-filter>

   <!-- Branch URI Scheme -->
   <intent-filter>
   <data  android:scheme="branchandroid"  />
   <action  android:name="android.intent.action.VIEW"  />
   <category  android:name="android.intent.category.DEFAULT"  />
   <category  android:name="android.intent.category.BROWSABLE"  />
   </intent-filter>

   <!-- Branch App Links (optional) -->
   <intent-filter  android:autoVerify="true">
   <action  android:name="android.intent.action.VIEW"  />
   <category  android:name="android.intent.category.DEFAULT"  />
   <category  android:name="android.intent.category.BROWSABLE"  />
   <data  android:scheme="https"  android:host="uobg.app.link"  />
   </intent-filter>
   </activity>

   <!-- Branch init -->
   <meta-data  android:name="io.branch.sdk.BranchKey"  android:value="key_live_gdzsepIaUf7wG3dEWb3aBkmcutm0PwJa"  />
   <meta-data  android:name="io.branch.sdk.BranchKey.test"  android:value="key_test_edwDakKcMeWzJ3hC3aZs9kniyuaWGCTa"  />
   <meta-data  android:name="io.branch.sdk.TestMode"  android:value="false"  />

   <!-- Branch install referrer tracking (optional) -->
   <receiver  android:name="io.branch.referral.InstallListener"  android:exported="true">
   <intent-filter>
   <action  android:name="com.android.vending.INSTALL_REFERRER"  />
   </intent-filter>
   </receiver>

   </application>

   </manifest>  
```

Replace the following with values from your [Branch Dashboard](https://dashboard.branch.io/account-settings/app)

-   branchandroid
-   uobg.app.link
-   key_live_gdzsepIaUf7wG3dEWb3aBkmcutm0PwJa
-   key_test_edwDakKcMeWzJ3hC3aZs9kniyuaWGCTa


#### MainApplication.java

``` 
// import Branch and RNBranch

import  io.branch.rnbranch.RNBranchPackage;

import  io.branch.referral.Branch;

  

//...

  

// add RNBranchPackage to react-native package list

@Override

protected List<ReactPackage> getPackages() {

return Arrays.<ReactPackage>asList(

new MainReactPackage(),

new RNBranchPackage(), // <-- add this

  

// ...

  

// add onCreate() override

@Override

public  void  onCreate() {

super.onCreate();

Branch.getAutoInstance(this);

}
```

#### MainActivity.java

```  
import  io.branch.rnbranch.*; // <-- add this

import  android.content.Intent; // <-- and this

  

public  class  MainActivity  extends ReactActivity {

  

@Override

protected String getMainComponentName() {

return  "base";

}

  

// Override onStart, onNewIntent:

@Override

protected  void  onStart() {

super.onStart();

RNBranchModule.initSession(getIntent().getData(), this);

}

  

@Override

public  void  onNewIntent(Intent intent) {

super.onNewIntent(intent);

setIntent(intent);

}

// ...

}
```


## React native code :-

**For Generate Url**

```
import branch from 'react-native-branch';

  

async generateInviteLink() {

let branchUniversalObject = await branch.createBranchUniversalObject(

this.state.inviteCode !== null

? this.state.inviteCode

: "",

{

locallyIndex: true,

title: "Refer&EarnDemo",

contentDescription:

"Invite your friends through this app and earn money.",

contentImageUrl: "https://api.gogotaxiapps.com/uploads/logo/gogo_logo_link.JPG"

}

);

let linkProperties = {

feature: "share",

channel: "facebook"

};

let controlParams = {

$desktop_url: ""

};

if (branchUniversalObject) {

branchUniversalObject

.generateShortUrl(linkProperties, controlParams)

.then(

success => {

var link_url = success.url

if (link_url && link_url.includes("/")){

var array = link_url.split("/");

//  console.log(array[array.length-1])

}

// console.log("inviteCode"  + success.url)

this.setState({

inviteCode: success.url,

urlCode: array[array.length-1]

});

},

error => {

// console.log("error ==>"+JSON.stringify(error))

}

);

} else {

//  console.log("waiting =============>" + JSON.stringify(e))

}

}

```

Replace your Refer code with this.state.inviteCode
& Set title, ```contentDescription```, ```contentImageUrl```
as per your Requirement.

#### Deep link data gets sent from your link to your app or website integration

### Data structure¶

***Example deep link data structure***

```
{
  "identity_id": "427469360685348303",
  "link": "https://example.app.link?%24identity_id=427469360685348303",
  "session_id": "429691081177874743",
  "data": {
    "$canonical_identifier": "item/1503684554354.28",
    "$canonical_url": "https://example.com/home?utm_campaign=test&deeplink=value",
    "$desktop_url": "http://example.com/home",
    "$exp_date": 0,
    "$identity_id": "427469360685348303",
    "$og_description": "My Content Description",
    "$og_image_url": "http://lorempixel.com/200/200/",
    "$og_title": "46D6D28E-0390-40E4-A856-BD74F34D24C8",
    "$publicly_indexable": 1,
    "+click_timestamp": 1503684563,
    "+clicked_branch_link": true,
    "+is_first_session": false,
    "+match_guaranteed": true,
    "custom": "blue",
    "random": "FE848A5B-78F7-42EC-A253-9F795FE91692",
    "added": "1503684554354.33",
    "~campaign": "new launch",
    "~channel": "facebook",
    "~creation_source": 3,
    "~feature": "sharing",
    "~id": 429691043152332059,
    "~referring_link": "https://example.app.link/X7OsnWv9TF",
    "~stage": "new person",
    "~tags": [
      "one",
      "two"
    ]
  }
}
```


##### Now You need to read Deep-link url


***you can subscribe branch io code on Root***

```
import branch from 'react-native-branch';

  

// MARK:- Branch.io subscription for receive param

branch.subscribe(({ error, params }) => {

if (error) {

// alert(error)

return;

}

console.log("in to subscribe ==> " + JSON.stringify(params));

console.log(

"in to params condition ==> " +

JSON.stringify(params["$canonical_identifier"])

);

  

if (params) {

console.log("in to params condition ==> " + JSON.stringify(params));

}

  

if (params["$canonical_identifier"]) {

// let data = JSON.stringify(params['+canonical_identifier'])

// alert("Code====canonical_identifier===>",data)

// this.setState({

// inviteCode: data

// });

  

let data = JSON.stringify(params);

// alert("Code====All Data===>",data.canonical_identifier)

// if (data.$canonical_identifier !==null) {

console.log("Code====data.conical===>" + data);

Alert.alert("You Invited by " + params["$canonical_identifier"] + " & you will receive 1000$");

  

AsyncStorage.setItem(

keys.SET_REFERRAL_TOKEN,

params["$canonical_identifier"]

);

} else {

}

})
```

you will receive invite code from params[```"$canonical_identifier"```]





