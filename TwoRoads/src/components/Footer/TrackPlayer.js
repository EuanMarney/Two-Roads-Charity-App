import React from "react";
import { TouchableOpacity, View } from "react-native";

import stylesheet from "../Styles/stylesheet";
import Feather from 'react-native-vector-icons/Feather';

const TrackPlayer = ({onPause, onPlay, isPlaying}) => {

    const handleOnPress = () => {
        if(isPlaying) {
            onPause();
        } else {
            onPlay();
        }
    }
    
    return(
        <View style={stylesheet.trackPlayerContainer}>
            <View style={stylesheet.trackPlayerIconContainer}>
                <TouchableOpacity>
                    <Feather name="rewind" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <Feather  name={isPlaying ? "play" : "pause"} style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="fast-forward" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TrackPlayer;