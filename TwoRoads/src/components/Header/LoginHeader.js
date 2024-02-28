// eslint-disable-next-line no-unused-vars
import React from "react";
<<<<<<< HEAD
import { View, Image } from 'react-native';
=======
import {View, Image} from 'react-native';
>>>>>>> 015b05748414344972ae95ea13ee852c5171ed6b

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
