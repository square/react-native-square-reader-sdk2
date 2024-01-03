package com.squareup.sdk.reader.react;
import android.os.Handler;
import android.os.Looper;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.squareup.sdk.reader.ReaderSdk;
import com.squareup.sdk.reader.authorization.AuthorizeCallback;
import com.squareup.sdk.reader.authorization.AuthorizeErrorCode;
import com.squareup.sdk.reader.authorization.DeauthorizeCallback;
import com.squareup.sdk.reader.authorization.DeauthorizeErrorCode;
import com.squareup.sdk.reader.authorization.Location;
import com.squareup.sdk.reader.core.CallbackReference;
import com.squareup.sdk.reader.core.Result;
import com.squareup.sdk.reader.core.ResultError;
import com.squareup.sdk.reader.react.internal.ErrorHandlerUtils;
import com.squareup.sdk.reader.react.internal.converter.LocationConverter;
import com.squareup.sdk.reader.react.internal.ReaderSdkException;

class AuthorizationModule : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(Authorization(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf()
    }
}

class Authorization(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "Authorization"

  @ReactMethod
    fun isAuthorized(promise: Promise) {
        promise.resolve(ReaderSdk.authorizationManager().getAuthorizationState().isAuthorized());
    }
    // override fun getConstants() = mapOf(
    //     "EVENT_ADD_SUCCESS" to EVENT_ADD_SUCCESS
    // )

    // @ReactMethod
    // fun addWithPromise(n1: Int, n2: Int, promise: Promise) = promise.resolve(n1 + n2)

    // @ReactMethod
    // fun addWithCallback(n1: Int, n2: Int, successCallback: Callback, failCallback: Callback) {
    //     successCallback(n1 + n2)
    // }

    // @ReactMethod
    // fun addWithListener(n1: Int, n2: Int) =
    //     reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
    //         .emit(EVENT_ADD_SUCCESS, n1 + n2)

    // companion object {
    //     const val EVENT_ADD_SUCCESS = "event_add_success"
    // }
}