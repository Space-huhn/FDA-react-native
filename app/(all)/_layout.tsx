import {Slot, Stack} from "expo-router";
import HomeScreen from "@/components/(screens)/HomeScreen";
import LoginScreen from "@/components/(screens)/LoginScreen";
import {View} from "react-native";
import {Drawer} from "@/components/Drawer";
import React from "react";

export default function RootLayout() {
  return (
      <Drawer screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "overview",
            }}
        />
        <Drawer.Screen
            name="test" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Test",
              title: "overview",
            }}
        />
        <Drawer.Screen
            name="profile" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Profile",
              title: "overview",
            }}
        />
      </Drawer>
  );
}
