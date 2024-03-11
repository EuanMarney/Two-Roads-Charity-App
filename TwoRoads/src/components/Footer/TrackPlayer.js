import React from "react";
import { TouchableOpacity, View } from "react-native";

import stylesheet from "../Styles/stylesheet";
import Feather from 'react-native-vector-icons/Feather';

const TrackPlayer = () => {
    
    return(
        <View style={stylesheet.trackPlayerContainer}>
            <View style={stylesheet.trackPlayerIconContainer}>
                <TouchableOpacity>
                    <Feather name="rewind" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="play" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="fast-forward" style={stylesheet.trackPlayerIcons} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TrackPlayer;