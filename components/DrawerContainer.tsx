import React from 'react';
import {Drawer} from "@/components/Drawer";

const DrawerContainer = () => {
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
                name="(auth)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "Login",
                    title: "overview",
                }}
            />
            <Drawer.Screen
                name="(all)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "Profile",
                    title: "overview",
                }}
            />
        </Drawer>
    );
};

export default DrawerContainer;