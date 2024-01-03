//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PERMISSIONS, checkMultiple, requestMultiple } from 'react-native-permissions';
import CustomButton from '../components/CustomButton';
import { assets } from '../components/img/Assets';
import { defaultStyles, textColorSecondary } from '../styles/common';

const ANDROID_PERMISSION = [
    PERMISSIONS.ANDROID.RECORD_AUDIO, 
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, 
    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
    PERMISSIONS.ANDROID.BLUETOOTH_CONNECT
];
const IOS_PERMISSION = [
    PERMISSIONS.IOS.MICROPHONE, 
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL
];

export default function PermissionScreen({ navigation }) {
    const [micEnabled, setMicEnabled] = useState(false);
    const [locEnabled, setLocEnabled] = useState(false);
    const [bluetoothEnabled, setBluetoothEnabled] = useState(false);

    useEffect(() => {
        checkPermissionsAndNavigate();
    }, [])

    const checkPermissionsAndNavigate = async () => {
        await checkMultiple(Platform.OS == 'android' ? ANDROID_PERMISSION : IOS_PERMISSION)
            .then((statuses) => {
                setPermission(statuses)
            });
        if (locEnabled && micEnabled && bluetoothEnabled) {
            console.log('permission granted')
        } else {
            requestPermission()
        }
    }
    
    const setPermission = (status:any) => {
        if (Platform.OS == 'android') {
            if (status[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted') {
                setMicEnabled(true)
            }
            if (status[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted') {
                setLocEnabled(true)
            }
            if (status[PERMISSIONS.ANDROID.BLUETOOTH_SCAN] === 'granted' && status[PERMISSIONS.ANDROID.BLUETOOTH_CONNECT] === 'granted') {
                setBluetoothEnabled(true)
            }
          
        } else {
            if (status[PERMISSIONS.IOS.MICROPHONE] === 'granted') {
                setMicEnabled(true)
            }
            if (status[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === 'granted') {
                setLocEnabled(true)
            }
            if (status[PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL] === 'granted') {
                setBluetoothEnabled(true)
            }
           
        }
    }

    const permissionCard = ({ title, description, isAllowed }) => {
        return (
            <TouchableOpacity onPress={()=>requestPermission()} style={styles.card}>
                <View style={styles.row}>
                    <View style={{ width: "90%" }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <Image
                        source={isAllowed ? assets.check : assets.circle}
                        style={styles.checkStyle}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    async function requestPermission() {

        requestMultiple(Platform.OS == 'android' ? ANDROID_PERMISSION : IOS_PERMISSION).then((status) => {
            setPermission(status)
        }).catch((err) => {
            console.log('err', err)
        })
    }

    function locationbuttonHandler() {
        if (locEnabled && micEnabled && bluetoothEnabled) {
            navigation.navigate('Readers')
        } else {
            checkPermissionsAndNavigate();
        }
    }


    return (
        <View style={defaultStyles.container}>
            {permissionCard({
                title: "Enable Microphone",
                description: "Some square readers use the microphone to communicate payment card data to your device.",
                isAllowed: micEnabled
            })}
            {permissionCard({
                title: "Enable Location Services",
                description: "Square reader needs to know where transactions take place to reduce risk and minimize payment disputes.",
                isAllowed: locEnabled
            })}
            {permissionCard({
                title: "Enable Bluetooth Services",
                description: "Square reader use the bluetooth to connect with the bluetooth peripherals.",
                isAllowed: bluetoothEnabled
            })}
           
            <CustomButton
                title={'START TAKING PERMISSIONS'}
                primary
                // disabled={!locEnabled || !micEnabled  }
                customStyle={{ paddingHorizontal: 20, height: 50 }}
                customTextStyle={{ fontSize: 16 }}
                onPress={() => locationbuttonHandler()}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        borderRadius: 1,
        elevation: 0.5,
        width: "95%",
        padding: 10,
        margin: 10,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:"center"
    },
    title: {
        fontWeight: "bold", fontSize: 16, color: "black"
    },
    description: {
        fontSize: 14,
        color:textColorSecondary
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        width: "100%"
    },
    checkStyle: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    }
});