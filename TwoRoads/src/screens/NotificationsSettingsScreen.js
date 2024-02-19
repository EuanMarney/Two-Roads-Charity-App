import * as SecureStore from "expo-secure-store";
import Checkbox from 'expo-checkbox';

import { React, useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import {Picker} from '@react-native-picker/picker';

const NOTIFIACATIONS_STORE_STRING = "notificationsOn";
const NOTIFICATIONS_ON = "yes";
const NOTIFICATIONS_OFF = "no";

const HOURS_STORE_STRING = "notificationsHours";
const MINUTES_STORE_STRING = "notificationsMins";

const NotificationsSettingsScreen = () => {

const [isChecked, setIsChecked] = useState(false);
const [checkBoxColor, setCheckBoxColor] = useState("black");
const [storedMins, setStoredMinutes] = useState("00 mins");
const [storedHours, setStoredHours] = useState("00 hours");

const loadValues = () => {
    SecureStore.getItemAsync(NOTIFIACATIONS_STORE_STRING)
    .then((value) => {
        console.log("loaded value " + value);
        if (value == NOTIFICATIONS_ON) {
            console.log("enabling notifications");
            setCheckBoxColor("green");
            setIsChecked(true);
        }
        else {
            setIsChecked(false);
        }
    })
    .catch((value) => {
        console.log("error reading notifcations settings");
        setIsChecked(false);
    });

SecureStore.getItemAsync(HOURS_STORE_STRING)
    .then((value) => {
        console.log("loaded value " + value);
        if (value == null) {
            setStoredHours("00 hours");
        }
        else {
            setStoredHours(value);
        }
    })
    .catch((value) => {
        console.log("error reading notifcations settings");
        setStoredHours("00 hours");
    });

SecureStore.getItemAsync(MINUTES_STORE_STRING)
    .then((value) => {
        console.log("loaded value " + value);
        if (value === null) {
            setStoredMinutes("00 mins");
        }
        else {
            setStoredMinutes(value);
        }
    })
    .catch((value) => {
        console.log("error reading notifcations settings");
        setStoredMinutes("00 mins");
    });
}

loadValues();


const onCheckBoxPress = () => {
    console.log("checkbox pressed");
    var checked = isChecked; // i don't like this but if i try to use isChecked it fails, probably due to async fun
    setIsChecked(!isChecked);
    
    console.log(isChecked);

    if (checked) {
        setCheckBoxColor("gray");
    }
    else {
        setCheckBoxColor("green");
    }
    
    if (!checked) {
        var toStore = NOTIFICATIONS_ON;
    }
    else {
        var toStore = NOTIFICATIONS_OFF;
    }

    SecureStore.setItemAsync(NOTIFIACATIONS_STORE_STRING, toStore)
    .then(() => {console.log("stored notifcations setting " + toStore);})
    .catch(() => {console.log("error storing notifications settings");})

 };

 const onTimeChange = (value, isHours) => {

    console.log(value);
    console.log(isHours);

    var toStoreValue = value;

let toStoreLocation;

if (isHours) {
    toStoreLocation = HOURS_STORE_STRING;
    setStoredHours(value);
} else {
    toStoreLocation = MINUTES_STORE_STRING;
    setStoredMinutes(value);
}

SecureStore.setItemAsync(toStoreLocation, toStoreValue)
    .then(() => {
        console.log("Stored notifications setting " + toStoreValue);
    })
    .catch(() => {
        console.log("Error storing notifications settings");
    });

 };

 let hours = []

 for (let i = 0; i < 24; i++) {
    let hour;
    if (i < 10) {
        hour = "0" + i + " hours";
    } else {
        hour = i + " hours";
    }
    hours.push(<Picker.Item label={hour} value={hour} key={hour} />)
}


let mins = [];

for (let i = 0; i < 60; i += 15) {
    let min;
    if (i === 0) {
        min = "00 mins";
    } else {
        min = i + " mins";
    }
    mins.push(<Picker.Item label={min} value={min} key={min} />);
}




  return ( 
    <View>
        <View style={styles.horizontalFlex}>
            <Text style={styles.headerText}>Enable Daily Notifications</Text>
            <View style={styles.checkBox}>
                <Checkbox value={isChecked} onValueChange={onCheckBoxPress} color={checkBoxColor}/>
            </View>
        </View>
        <View style={styles.horizontalFlex}>
            <Text style={styles.headerText}>Remind me daily at</Text>

        </View>
 
        <View>
         <View>
            <Picker style={{ marginLeft: 5, marginRight: 5 }} 
            selectedValue={storedHours} 
            onValueChange={(itemValue, itemIndex) => onTimeChange(itemValue, true) }>
                    {hours}
            </Picker>
            </View>
            <View>
            <Picker style={{ marginLeft: 5, marginRight: 5 }} 
            selectedValue={storedMins} 
            onValueChange={(itemValue, itemIndex) => onTimeChange(itemValue, false) }>
                    {mins}
                </Picker>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    horizontalFlex: {
        flexDirection: 'row',
    },
    checkBox: {
        marginBottom: 20,
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 10,
    },
    layoutStyle: {
      flex: 1,
      backgroundColor: 'blue',
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: 20, 
    },
    headerText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 28, 
      paddingVertical: 20,
    },
    buttonContainer: {
      paddingHorizontal: 22,
    },
    customButton: {
      marginBottom: 20,
      borderRadius: 20,
      paddingVertical: 32,
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
  });

export default NotificationsSettingsScreen;
