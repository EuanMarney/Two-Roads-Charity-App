import { useNavigation , useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

import stylesheet from "../Styles/stylesheet";

const InputScreenHeader = ({ headerStyles }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleCrossPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={stylesheet.headerComponentContainer} testID="input-screen-header">
      <View style={[stylesheet.headerRectangle, headerStyles]}>
        <View style={stylesheet.headerWithIconContainer}>
          <Text style={stylesheet.headerText}>{route.name}</Text>
          <TouchableOpacity onPress={handleCrossPress} testID="cross-button">
            <Feather name="x" style={stylesheet.iconCog} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputScreenHeader;
