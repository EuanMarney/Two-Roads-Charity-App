import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import GratitudeDiaryScreen from "../screens/GratitudeDiaryScreen";
import KindnessActsScreen from "../screens/KindnessActsScreen";
import HedonicMomentsScreen from "../screens/HedonicMomentsScreen";
import ConnectionActsScreen from "../screens/ConnectionActsScreen";
import DailyMindfulnessScreen from "../screens/DailyMindfulnessScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gratitude Diary" component={GratitudeDiaryScreen} />
      <Stack.Screen name="Acts of Kindness" component={KindnessActsScreen} />
      <Stack.Screen name="Hedonic Moments" component={HedonicMomentsScreen} />
      <Stack.Screen
        name="Acts of Connection"
        component={ConnectionActsScreen}
      />
      <Stack.Screen
        name="Daily Mindfulness"
        component={DailyMindfulnessScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
