import { Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "@/components/(screens)/HomeScreen";
import LoginScreen from "@/components/(screens)/LoginScreen";
import DrawerBar from "@/components/Drawer";
import React from "react";


export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
        <HomeScreen />
    </View>
  );
}
