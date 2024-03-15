import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

import stylesheet from "../Styles/stylesheet";

const {width : screenWidth} = Dimensions.get('window');

const CarouselCalendarComp = ({entries, renderItem}) => {
        

    return(
        <Carousel
            style={{
                flexDirection: "row",
                width: screenWidth,
                justifyContent: "center",
                position: "absolute",
                
            }}
            width={screenWidth * 0.8}
            height={screenWidth * 2}
            data={entries}
            renderItem={renderItem}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.85,
                parallaxScrollingOffset: 50,
                parallaxAdjacentItemScale: 0.75,
            }}
        />
    );
};  

export default CarouselCalendarComp;