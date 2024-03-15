import React from "react";
import { TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

import stylesheet from "../Styles/stylesheet";

const TrackPlayer = ({onPause, onPlay, onRewind, onFastForward, isPlaying}) => {

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
                <TouchableOpacity onPress={onRewind}>
                    <Feather name="rewind" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <Feather  name={isPlaying ? "play" : "pause"} style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFastForward}>
                    <Feather name="fast-forward" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TrackPlayer;