import LottieView from 'lottie-react-native';
import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

import stylesheet from "../Styles/stylesheet";


const {width : screenWidth} = Dimensions.get('window');

const CarouselComp = ({entries, onActivityPress}) => {
    
    const renderItem = ({item, index}) => {
        return(
            <View style={stylesheet.cardContainer}>
                <View style={stylesheet.animationContainer}>
                    <LottieView source={item.animationPath} autoPlay loop/>
                </View>
                <View style={stylesheet.cardTextContainer}>
                    <Text style={stylesheet.cardTitle}>{item.title}</Text>
                    <Text style={stylesheet.cardText}>{item.description}</Text>
                    <TouchableOpacity style={stylesheet.dailyMindfulnessButtons} onPress={() => onActivityPress(item.id)}>
                        <Text style={stylesheet.buttonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

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

export default CarouselComp;