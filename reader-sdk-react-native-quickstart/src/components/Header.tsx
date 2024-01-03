//@ts-nocheck
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { defaultStyles, textColorPrimary } from '../styles/common';
class Props {
  title:string;
  onPress() {};
  primary?: boolean = false;
  hideBack?: boolean = false;
  customStyle?:StyleProp<ViewStyle>;
  customTextStyle?:StyleProp<ViewStyle>; 
}
const Header:  FC<Props> = props =>  {
    const navigation = useNavigation();
  return (
    <View style={defaultStyles.headerContainer}>
       {props.hideBack ? null :  
       <TouchableOpacity onPress={()=>navigation.goBack(null)} >
            <MCIcon name="keyboard-backspace" size={25} color={textColorPrimary}/>
        </TouchableOpacity>
        }
        <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    flex: 1,
  },
  backArrowImage:{
    height:25,
    width:25,
    resizeMode:'contain'
  },
  indicatorContainer: {
    flex: 1,
  },
  titleStyle:{
    fontSize:18,
    fontWeight:"500",
    color:textColorPrimary,
    width:'90%',
    alignSelf:"center"
  }
});

export default Header;