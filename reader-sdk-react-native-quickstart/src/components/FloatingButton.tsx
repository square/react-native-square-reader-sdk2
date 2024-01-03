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
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Image} from 'react-native';
import { assets } from './img/Assets';

class Props {
  onPress() {}
  disabled?: boolean = false;
  primary?: boolean = false;
  customStyle?:StyleProp<ViewStyle>;
  customTextStyle?:StyleProp<ViewStyle>;
  
}

const FloatingButton: FC<Props> = props => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={props.onPress}
      disabled={props.disabled}>
     <Image source={assets.floater} style={styles.floatingImage}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    marginTop: 15,
  },
  floatingImage:{
    resizeMode:"contain",
    height:100,
    width:100
  },
  floatingButton:{
    position:"absolute",
    left:0,
    bottom:40,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  disabledButton: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  disabledButtonText: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  primaryButton: {
    backgroundColor: '#3972B2',
  },
  secondaryButton: {
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default FloatingButton;
