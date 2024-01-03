import React,{ FunctionComponent, useRef, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FloatingButton from "../components/FloatingButton";
import { assets } from '../components/img/Assets';
import { backgroundColor, defaultStyles, textColorPrimary } from "../styles/common";
import FeatherIcon from "react-native-vector-icons/Feather";
import TabViewRender from "../components/TabViewRender";

const CardCheckout: FunctionComponent = ({ navigation }:any) => {
    const bottomSheetRef:any = useRef();
    const [isAvailable, setAvailable] = useState(false);
    const { height } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ alignSelf: "flex-start" }}>
                <MCIcon name="close" size={25} color={textColorPrimary} />
            </TouchableOpacity>
            <View style={styles.paddingView}>
                <Text style={styles.amount}>{'$1.0'}</Text>
            </View>
            <View style={styles.paddingView}>

                <Image source={assets.reader} style={styles.imageContainer} />
            </View>
            <View style={styles.paddingView}>
                {isAvailable ?
                    <Text style={styles.description}>Insert or tap{'\n'} your card or{'\n'} payment device.</Text> : <Text style={styles.description}>Please connect a Square{'\n'} Contactless and Chip{'\n'} Reader or a Square{'\n'} magstripe reader to take a{'\n'} payment.</Text>}
            </View>
            <TouchableOpacity onPress={() => bottomSheetRef.current.open()} style={styles.cardView}>
                <Text style={{ color: textColorPrimary }}>Manual Credit Card Entry</Text>
                <MCIcon name="chevron-right" size={20} color={textColorPrimary} />
            </TouchableOpacity>
            <FloatingButton onPress={() => {
                bottomSheetRef.current.open();
            }} />
            <RBSheet
                ref={bottomSheetRef}
                height={height / 1.6}
                openDuration={250}
                customStyles={{ container: defaultStyles.rbsheetContainer }}
            >
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ color: '#787d82', fontWeight: "400" }}>MAGSTRIPE</Text>
                    {TabViewRender({
                        title: "Swipe", icon: <FeatherIcon name="credit-card" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {

                            bottomSheetRef.current.close()
                        }
                    })}
                    {TabViewRender({
                        title: "Remove Reader", icon: <MCIcon name="block-helper" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {
                            setAvailable(false);
                            bottomSheetRef.current.close()
                        }
                    })}
                    <View style={defaultStyles.divider} />
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={styles.tabText} style={styles.titleHeader}>CONTACTLESS AND CHIP</Text>
                    </View>
                    {TabViewRender({
                        title: "Swipe", icon: <FeatherIcon name="credit-card" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {

                            bottomSheetRef.current.close()
                        }
                    })}
                    {TabViewRender({
                        title: "Insert Card", icon: <MCIcon name="tray-arrow-down" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {
                            setAvailable(true);
                            bottomSheetRef.current.close()
                        }
                    })}
                    {TabViewRender({
                        title: "Remove Card", icon: <MCIcon name="tray-arrow-up" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {

                            bottomSheetRef.current.close()
                        }
                    })}
                    {TabViewRender({
                        title: "Tap Card", icon: <MCIcon name="contactless-payment" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {

                            bottomSheetRef.current.close()
                        }
                    })}
                    {TabViewRender({
                        title: "Remove Reader", icon: <MCIcon name="block-helper" size={20} style={{ marginRight: 10 }} color={'black'} />, onPress: () => {
                            setAvailable(false);
                            bottomSheetRef.current.close()
                        }
                    })}
                    <View style={[defaultStyles.divider, { marginVertical: 10 }]} />
                    {TabViewRender({
                        title: "Payment Details", icon: <Image source={assets.control} style={{ height: 20, width: 20, resizeMode: "contain", marginRight: 10 }} />, onPress: () => {

                            bottomSheetRef.current.close()
                        }
                    })}
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

export default CardCheckout;
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center", padding: 10, backgroundColor: backgroundColor
    },
    imageContainer: {
        height: 150, width: 150, resizeMode: "contain", color: textColorPrimary
    },
    paddingView: {
        padding: 10
    },
    amount: {
        fontSize: 40, fontWeight: 'bold', color: textColorPrimary
    },
    description: {
        fontSize: 20,
        color: textColorPrimary,
        textAlign: "center"
    },
    cardView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop:20,
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: "100%",
        borderColor: "#d4d9dc"
    },
    modalContainer: {
        padding: 10,
        height: '50%',
        borderWidth: 1,
        backgroundColor: "white"
    },
    tabView: {
        flexDirection: "row", alignItems: "center",
        paddingVertical: 10,
    },
    tabText: {
        width: '80%'
    },
    titleHeader:{
         color: '#787d82', 
         fontWeight: "400" 
    }

})
