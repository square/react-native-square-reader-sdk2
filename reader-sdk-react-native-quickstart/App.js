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

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalizeProvider, loadCldr } from 'react-native-globalize';

// import AuthorizingScreen from './src/screens/AuthorizingScreen';
import CardCheckout from './src/screens/CardCheckout';
import CardPayment from './src/screens/CardPayment';
import AuthorizingScreen from './src/screens/AuthorizingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import Readers from './src/screens/Readers';
import SplashScreen from './src/screens/SplashScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';

loadCldr(
  // Load the locales you actually need
  require('react-native-globalize/locale-data/en'),
);

const App = () => {
  const Stack = createStackNavigator();
  return (
    <GlobalizeProvider locale="en">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CalculatorScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
           {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
          {/*<Stack.Screen name="Auth" component={AuthorizingScreen} />
          <Stack.Screen name="Permissions" component={PermissionScreen} />
          <Stack.Screen name="Readers" component={Readers} />
          <Stack.Screen name="CardPayment" component={CardPayment} />
          <Stack.Screen name="CardCheckout" component={CardCheckout} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalizeProvider>
  );
};

export default App;
