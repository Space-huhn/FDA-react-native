import {Slot, Stack} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect} from "react";
import {getItem} from "@/utils/AsyncStorage";
import DrawerContainer from "@/components/DrawerContainer";
import {Drawer} from "@/components/Drawer";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "@/components/(screens)/HomeScreen";
import LoginScreen from "@/components/(screens)/LoginScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";

export default function RootLayout() {
    const [isAuth, setIsAuth] = React.useState(false);
    const [active, setActive] = React.useState('');

    const Drawer = createDrawerNavigator();

    useEffect(async ():any => {
      setIsAuth(await getItem('token'));
    }, [])

  return (
      <>
          <SafeAreaView style={{flex: 1}}>
              <Stack>
                  <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                  <Stack.Screen name="(all)" options={{headerShown: false}}/>
              </Stack>
          </SafeAreaView>
      </>
  );
}
