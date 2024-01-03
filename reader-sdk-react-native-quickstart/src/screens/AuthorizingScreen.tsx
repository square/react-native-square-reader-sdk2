/*
Copyright 2022 Square Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import { backgroundColor, defaultStyles, textColorPrimary } from '../styles/common';
// import {
//   authorizeAsync,
//   AuthorizeErrorNoNetwork,
//   UsageError,
// } from 'react-native-square-reader-sdk';
const ENV = [
  {
    id: 1,
    name: 'Production',
    value: 'prod'
  },
  {
    id: 2,
    name: 'Sandbox',
    value: 'sand'
  },
]
export default function AuthorizingScreen({ navigation, route }) {
  const [env, setEnv] = useState('');
  // GET AUTHORIZE CODE
  useEffect(() => {
    // authorize();
  });

  // CHECK AUTHENTICATION CODE
  const authorize = async () => {
    const authCode = 'readersdk2-alpha-tester';
    if (!authCode) {
      Alert.alert('Error: empty auth code');
      // navigation.goBack();
      return;
    }
    try {
      console.log('authorization happening',authCode)
      await authorizeAsync(authCode);
      navigation.navigate('Checkout');
    } catch (ex: any) {
      let errorMessage = ex.message;
      // SWITCHCASE FOR ERROR CONDITIONS
      switch (ex.code) {
        case AuthorizeErrorNoNetwork:
          // Remind connecting to network and retry
          Alert.alert('Network error', ex.message, [
            {text: 'Retry', onPress: () => authorize()},
            {
              text: 'Cancel',
              onPress: () => navigation.navigate('Authorize'),
              style: 'cancel',
            },
          ]);
          break;
        case UsageError:
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
          }
          Alert.alert('Error', errorMessage);
          // navigation.navigate('Authorize');
          break;
        default:
          Alert.alert('Error', errorMessage);
          // navigation.navigate('Authorize');
          break;
      }
    }
  };

  // MAIN VIEW DESIGN
  return (
    <SafeAreaView style={[defaultStyles.pageContainer, styles.container]}>
      <StatusBar backgroundColor={backgroundColor}/>
      <View style={{width:"100%",alignItems:'center'}}>
        {ENV.map((it, ind) => {
          return (
            <View key={ind} style={{ flexDirection: "row",  alignItems: 'center' }}>
              <RadioButton
                value={it.value}
                status={env === it.value ? 'checked' : 'unchecked'}
                uncheckedColor='rgba(255,255,255,0.6)'
                onPress={() => setEnv(it.value)}
                color={textColorPrimary}
              />
              <Text style={{fontSize:16,fontWeight:"600"}}>{it.name}{ind==1?'    ':''}</Text>
            </View>
          )
        })}
        <CustomButton
        title='AUTHORIZE WITH AUTH'
        customStyle={{alignSelf:"center",width:"90%"}}
        disabled={env==""}
        onPress={()=>navigation.navigate('Permissions')}
        />

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
     justifyContent: "center",
  }
})
