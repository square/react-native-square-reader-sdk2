//@ts-nocheck
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { backgroundColor, textColorPrimary } from "../styles/common";

const CardPayment: FunctionComponent = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:backgroundColor}}>
            <Header hideBack title="Reader SDK" />
            <View style={{justifyContent:"center"}}>
            <CustomButton
            // primary
            title="Charge $1"
            customStyle={{alignSelf:"center"}}
            onPress={()=>navigation.navigate('CardCheckout')}
            />
            <CustomButton
            
            title="Square Reader"
            customStyle={{alignSelf:"center",backgroundColor:textColorPrimary}}
            customTextStyle={{color:backgroundColor}}
            />
            <CustomButton
            
            title="Log Out"
            customStyle={{alignSelf:"center",backgroundColor:textColorPrimary}}
            customTextStyle={{color:backgroundColor}}
            />
            </View>
        </View>
    );
};

export default CardPayment;
