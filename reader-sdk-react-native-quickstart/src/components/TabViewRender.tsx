//@ts-nocheck
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { textColorSecondary } from "../styles/common";

class Props {
    title:string;
   onPress?:{};
   icon?:{}; 
  }

const TabViewRender: FC<Props> = props =>  {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.tabView}>
        {props.icon}
        <Text style={styles.tabText}>{props.title}</Text>
    </TouchableOpacity>
    );
};

export default TabViewRender;
const styles = StyleSheet.create({
    tabView: {
        flexDirection: "row", alignItems: "center",
        paddingVertical: 10,
    },
    tabText: {
        width: '80%',
        color:textColorSecondary
    },
})