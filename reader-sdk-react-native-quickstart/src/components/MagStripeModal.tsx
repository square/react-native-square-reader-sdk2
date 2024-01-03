//@ts-nocheck
import React, { FC } from "react";
import { View, StyleSheet,Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"
import FeatherIcon from "react-native-vector-icons/Feather";
import { defaultStyles } from "../styles/common";
class Props {
    isVisible: boolean = false;
    onClose() {};
  }

  const tabViewRender = ({title,icon,type,onPress})=>{
return(
    <TouchableOpacity style={styles.tabView}>
    {icon}
    <Text style={styles.tabText}>{title}</Text>
  </TouchableOpacity>
)
  }
const MagStripeModal: FC<Props> = props => {
    return (
        <Modal onDismiss={()=>props.onClose()} style={{flex:1}} isVisible={props.isVisible}>
        <View style={{flex:0.7, margin:2,padding:5,backgroundColor:"white",padding:10}}>
        <View style={{paddingVertical:20}}>
          <Text style={{color:'#787d82',fontWeight:"400"}}>MAGSTRIPE</Text>
          </View>
          {tabViewRender("Swipe",<FeatherIcon name="credit-card" size={20} color={'black'}/>)}
          <View style={styles.tabView}>
            <FeatherIcon name="credit-card" size={20} color={'black'}/>
            <Text style={styles.tabText}>Swipe</Text>
          </View>
          <View style={styles.tabView}>
            <MCIcon name="block-helper" size={20} color={'black'}/>
            <Text style={styles.tabText}>Remove Reader</Text>
          </View>
          <View style={defaultStyles.divider}/>
          <View style={{paddingVertical:20}}>
          <Text style={styles.tabText} style={{color:'#787d82',fontWeight:"400"}}>CONTACTLESS AND CHIP</Text>
          </View>
          <View style={styles.tabView}>
            <FeatherIcon name="credit-card" size={20} color={'black'}/>
            <Text style={styles.tabText}>Swipe</Text>
          </View>
          <View style={styles.tabView}>
            <MCIcon name="block-helper" size={20} color={'black'}/>
            <Text style={styles.tabText}>Insert Card</Text>
          </View>
          <View style={styles.tabView}>
            <FeatherIcon name="credit-card" size={20} color={'black'}/>
            <Text style={styles.tabText}>Remove Card</Text>
          </View>
          <View style={styles.tabView}>
            <MCIcon name="block-helper" size={20} color={'black'}/>
            <Text style={styles.tabText}>Tap Card</Text>
          </View>
          <View style={styles.tabView}>
            <MCIcon name="block-helper" size={20} color={'black'}/>
            <Text style={styles.tabText}>Remove Reader</Text>
          </View>
          <View style={defaultStyles.divider}/>
          <View style={styles.tabView}>
            <MCIcon name="block-helper" size={20} color={'black'}/>
            <Text style={styles.tabText}>Payment Details</Text>
          </View>
          
        </View>
      </Modal>
    );
};

export default MagStripeModal;
const styles = StyleSheet.create({
    modalContainer:{
        padding:10,
        height:'50%',
        borderWidth:1,
        backgroundColor:"white"
    },
    tabView:{
        flexDirection:"row",alignItems:"center",
        paddingVertical:10
    },
    tabText:{
        width:'60%'
    }
})
