import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native"; 
import Feather from 'react-native-vector-icons/Feather'
import stylesheet from "../Styles/stylesheet";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const InputScreenHeader = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const handleCrossPress = () => {
        navigation.navigate('Home')
    }

    return(
        <View style={stylesheet.headerComponentContainer}>
            <View style={stylesheet.headerRectangle}>
                <View style={stylesheet.headerWithIconContainer}>
                    <Text style={stylesheet.headerText}>{route.name}</Text>
                    <TouchableOpacity onPress={handleCrossPress}>
                        <Feather name="x" style={stylesheet.iconCog} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default InputScreenHeader;