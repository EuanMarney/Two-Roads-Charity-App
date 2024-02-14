import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather } from "@expo/vector-icons/Feather";

import HomeScreen from "../screens/HomeScreen";
import GratitudeDiaryScreen from "../screens/InputScreens/GratitudeDiaryScreen";
import KindnessActsScreen from "../screens/InputScreens/KindnessActsScreen";
import HedonicMomentsScreen from "../screens/InputScreens/HedonicMomentsScreen";
import ConnectionActsScreen from "../screens/InputScreens/ConnectionActsScreen";
import DailyMindfulnessScreen from "../screens/DailyMindfulnessScreen";
import LoginScreen from "../screens/LoginScreen";
import PinScreenReg1 from "../screens/RegisterScreens/PinScreenReg1";
import PinScreenReg2 from "../screens/RegisterScreens/PinScreenReg2";
import RegisterScreen from "../screens/RegisterScreens/RegisterUnameScreen";
import WelcomePage from '../screens/WelcomePage';
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreens/CalendarScreen";
import CalendarRememberanceScreen from "../screens/CalendarScreens/CalendarRememberanceScreen";
import NotificationsSettingsScreen from "../screens/NotificationsSettingsScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomePage">
      <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen}/>
      <Stack.Screen name="WelcomePage" options={{headerShown: false}} component={WelcomePage} />
      <Stack.Screen name="RegisterScreen" options={{headerShown: false}} component={RegisterScreen}/>
      <Stack.Screen name="PinScreenReg1" options={{headerShown: false}} component={PinScreenReg1}/>
      <Stack.Screen name="PinScreenReg2" options={{headerShown: false}} component={PinScreenReg2}/>
      <Stack.Screen name="Home" options={{headerShown: false, gestureEnabled: false}} component={HomeScreen} />
      <Stack.Screen name="Gratitude Diary" component={GratitudeDiaryScreen} />
      <Stack.Screen name="Acts of Kindness" component={KindnessActsScreen} />
      <Stack.Screen name="Hedonic Moments" component={HedonicMomentsScreen} />
      <Stack.Screen name="Acts of Connection" component={ConnectionActsScreen}/>
      <Stack.Screen name="Daily Mindfulness" component={DailyMindfulnessScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
      <Stack.Screen name="Calendar" component={CalendarScreen}/>
      <Stack.Screen name="CalendarRememberance" component={CalendarRememberanceScreen}/>
      <Stack.Screen name="Notifications Settings" component={NotificationsSettingsScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
