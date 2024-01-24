import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const LoginHeader = () => {

    return(
        <View style={styles.headerContainer}> 
            <Image source={require('../../assets/twoRoads.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        aspectRatio: 3.5,
        resizeMode: "contain",
    }
});

export default LoginHeader;