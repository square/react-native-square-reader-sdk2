package com.squareup.sdk.reader.react

import android.app.Application
import com.squareup.sdk.reader2.auth.OAuthHelper
import com.squareup.sdk.reader2.ReaderSdk

class ReaderSdk2DemoApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    // val appId = OAuthHelper.getAppId(this)
    ReaderSdk.initialize("readersdk2-alpha-tester", this)
  }
}
