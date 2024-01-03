
import React, { FunctionComponent, useRef, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, Alert, useWindowDimensions, StyleSheet } from "react-native";
import { defaultStyles } from "../styles/common";
import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";
import CustomButton from "../components/CustomButton";
import { assets } from "../components/img/Assets";
import MagStripeModal from "../components/MagStripeModal";
import RBSheet from "react-native-raw-bottom-sheet";
import TabViewRender from "../components/TabViewRender";
import FeatherIcon from "react-native-vector-icons/Feather";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"
import ReaderViewRender from "../components/ReaderViewRender";

const Readers: FunctionComponent = ({navigation}:any) => {
    const [readers, setReaders] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const bottomSheetRef:any = useRef();
    const magstripSheetRef:any = useRef();
    const {height,width} = useWindowDimensions();

    function addReader() {
        let data: any = [...readers];
        if(data.length>5){
            Alert.alert('Maximum readers added')
        }else{
        data.push({
            id: readers.length + 1,
            name: "Magstripe Reader",
            status: "Ready"
        })
        setReaders(data);
        }
    }

    const readerListFooter = () => {
        return (
            <CustomButton
                customStyle={{ alignSelf: "center" }}
                title={'Connect a Reader'}
                onPress={() => bottomSheetRef.current.open()}
            />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header onPress={()=>null} title={'Square Readers'} />
            <View style={[defaultStyles.descriptionContainer, { padding: 10 }]}>
                <FlatList
                    data={readers}
                    renderItem={ReaderViewRender}
                    keyExtractor={(item, index) => String(index)}
                    style={{ width: "100%", }}
                    ListFooterComponent={readerListFooter}
                />
            </View>
            <FloatingButton onPress={()=>{
                // setShowModal(true)
                magstripSheetRef.current.open()
                // navigation.navigate('CardPayment')
                }}/>
            <MagStripeModal
            isVisible={showModal}
            onClose={()=>setShowModal(false)}
            />
              <RBSheet
                ref={bottomSheetRef}
                height={height / 7}
                openDuration={250}
                customStyles={{
                    container: defaultStyles.rbsheetContainer
                }}
            >
                <View>
                {TabViewRender({
                    title:"Payment Details",
                    icon: <FeatherIcon name="credit-card" size={20} style={{marginRight:10}} color={'black'} />,
                    onPress:()=>{navigation.navigate('CardPayment'); bottomSheetRef.current.close()}
                })}                
                {TabViewRender({title:"Add Contactless & Chip Reader",
                icon: <MCIcon name="credit-card-chip-outline" size={20} style={{marginRight:10}} color={'black'} />,
                onPress:()=>{
                    addReader()
                bottomSheetRef.current.close()}})}                
                </View>
            </RBSheet>
            <RBSheet
                ref={magstripSheetRef}
                height={height / 1.6}
                openDuration={250}
                customStyles={{ container: defaultStyles.rbsheetContainer }} >
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ color: '#787d82', fontWeight: "400" }}>MAGSTRIPE</Text>                 
                    {TabViewRender({title:"Swipe",icon: <FeatherIcon name="credit-card" size={20} style={{marginRight:10}} color={'black'} />,onPress:()=>{navigation.navigate('CardPayment');magstripSheetRef.current.close()}})}
                    {TabViewRender({title:"Remove Reader",icon: <MCIcon name="block-helper" size={20} style={{marginRight:10}} color={'black'} />})}
                    <View style={defaultStyles.divider} />        
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={styles.tabText} style={{ color: '#787d82', fontWeight: "400" }}>CONTACTLESS AND CHIP</Text>
                    </View>
                    {TabViewRender({title:"Swipe",icon: <FeatherIcon name="credit-card" size={20} style={{marginRight:10}} color={'black'} />})}
                    {TabViewRender({title:"Insert Card",icon: <MCIcon name="tray-arrow-down" size={20} style={{marginRight:10}} color={'black'} />})}
                    {TabViewRender({title:"Remove Card",icon: <MCIcon name="tray-arrow-up" size={20} style={{marginRight:10}} color={'black'} />})}
                    {TabViewRender({title:"Tap Card",icon: <MCIcon name="contactless-payment" size={20} style={{marginRight:10}} color={'black'} />})}
                    {TabViewRender({title:"Remove Reader",icon: <MCIcon name="block-helper" size={20} style={{marginRight:10}} color={'black'} />})}
                    <View style={[defaultStyles.divider,{marginVertical:10}]} />
                    {TabViewRender({title:"Payment Details",icon: <Image source={assets.control} style={{height:20,width:20,resizeMode:"contain",marginRight:10}} />})}                
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

export default Readers;

const styles = StyleSheet.create({
    tabView: {
        flexDirection: "row", alignItems: "center",
        paddingVertical: 10,
    },
    tabText: {
        width: '80%'
    },
})