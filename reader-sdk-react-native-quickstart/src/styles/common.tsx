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

import { StyleSheet } from 'react-native';

export const backgroundColor = '#4087E1';
export const textColorPrimary = '#FFF';
export const textColorSecondary = '#000';
export const dividerColor="#d4d9dc";

export const defaultStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor:backgroundColor
  },
  headerContainer:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  descriptionContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:backgroundColor
  },
  logo: {
    height: 48,
    width: 48,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 64,
  },
  pageContainer: {
    backgroundColor:backgroundColor,
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoStyle: {
    width: 100, height: 100
  },
  settingIconStyle: {
    width: 24, height: 24, alignSelf: 'flex-end', tintColor: 'white'
  },
  divider:{
    height:1,
    backgroundColor:"#d4d9dc",
  },
  rbsheetContainer:{
      alignSelf: "center",
      padding: 10,
      paddingHorizontal:15,
      width: "95%",
      borderRadius: 5,
      marginBottom: 10
  }
});
