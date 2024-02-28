// eslint-disable-next-line no-unused-vars
import React from "react";
import { View, Image } from 'react-native';

import stylesheet from "../Styles/stylesheet";

const LoginHeader = () => {
  return (
    <View style={stylesheet.loginHeaderContainer} testID="login-header">
      <Image
        source={require("../../assets/twoRoads.png")}
        style={stylesheet.loginImage}
      />
    </View>
  );
};

export default LoginHeader;
