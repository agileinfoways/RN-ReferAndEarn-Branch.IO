package com.referandearndemo;

import com.facebook.react.ReactActivity;
import io.branch.rnbranch.*;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReferAndEarnDemo";
    }
     @Override
    protected void onStart() {
        super.onStart();
        //   Uri iUri = getIntent().getData();
        //   System.out.println("iUri "+ iUri.toString());
        RNBranchModule.initSession(getIntent().getData(), this);
        // LocalBroadcastManager.getInstance(this).registerReceiver(
        //         mMessageReceiver, new IntentFilter("OPEN_DRIVER_APP"));
        // RNBranchModule.initSession(getIntent().getData(), this);
    }

    // @Override
    // public void onNewIntent(Intent intent) {
    //     this.setIntent(intent);
    // }

}
