//@ts-nocheck
import React, { FC } from "react";
import { View,Text,Image, StyleSheet } from "react-native";
import { assets } from "./img/Assets";
import { textColorSecondary } from "../styles/common";
class Props {
    title:string;
    onPress?:{}; 
  }
const ReaderViewRender:  FC<Props> = props => {
    return (
        <View style={styles.container}>
                <View style={{ width: "90%" }}>
                    <Text style={styles.title}>{props.item.name}</Text>
                    <Text style={styles.description}>{props.item.status}</Text>
                </View>
                <View>
                    <Image source={assets.rightArrow} style={{ height: 20, width: 20, resizeMode: "contain" }} />
                </View>
            </View>
    );
};

export default ReaderViewRender;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",padding:10, marginBottom: 10,backgroundColor:"white",borderRadius:5
    },
    title:{
        fontWeight: "bold", fontSize: 16,color:textColorSecondary
    },
    description:{
        fontSize:14,color:textColorSecondary
    }
})
