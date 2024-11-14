import React, {useEffect} from "react";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {router} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import {jwtDecode, JwtDecodeOptions} from "jwt-decode";
import {getItem, removeItem} from "@/utils/AsyncStorage";
import {DrawerToggleButton} from "@react-navigation/drawer";
import {Button} from "react-native-paper";
import {logout} from "@/store/features/authSlice";


const HomeScreen = (token: string, options: JwtDecodeOptions & { header: true }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const navigation = useNavigation();



    useEffect(() => {

        setIsAuth(getItem('token'));
    }, [])

    const goToLogin = () => {
        router.push('./login');
    }

    const logout = async () => {
        await removeItem('token');
        setIsAuth(false)
    }

    return (
        <ScrollView style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}>

            {/* Header Section */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    {isAuth &&
                    <View style={{marginLeft: -20}}>
                      <DrawerToggleButton />
                    </View> }
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#FF7622' }}>DELIVER TO</Text>
                        <Text>Halal Lab Office</Text>
                    </View>
                </View>
                {isAuth ?
                    <TouchableOpacity>
                        <View style={{ position: 'relative', marginRight: 5 }}>
                            <FontAwesome name="shopping-cart" size={24} color="#181C2E" />
                            <View style={{
                                position: 'absolute', right: -5, top: -5,
                                backgroundColor: '#FF7622', width: 18, height: 18,
                                borderRadius: 9, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: 'white', fontSize: 12 }}>2</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={goToLogin}>
                        {/*<Link href={'./(auth)'}>*/}
                            <View style={{ position: 'relative', marginRight: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                                <Text style={{ fontSize: 14, color: "#B5B5B5" }}>Login</Text>
                                <AntDesign name="login" size={24} color="#B5B5B5" />
                                {/*<FontAwesomeIcon icon={faRightToBracket}  size={24} color="#B5B5B5" />*/}
                            </View>
                        {/*</Link>*/}
                    </TouchableOpacity>
                }
            </View>

            {/* Greeting Section */}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hey Halal, Good Afternoon!</Text>

            {/* Search Bar */}
            <View style={{ marginVertical: 20 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#F4F4F4', borderRadius: 10, padding: 10, alignItems: 'center' }}>
                    <FontAwesome name="search" size={20} color="#B5B5B5" />
                    <TextInput
                        placeholder="Search dishes, restaurants"
                        style={{ marginLeft: 10, fontSize: 16 }}
                    />
                </View>
            </View>

            {/* Categories Section */}
            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>All Categories</Text>
                    <Text style={{ color: '#FF7622' }}>See All</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFDBA9', padding: 10, borderRadius: 20, marginRight: 10 }}>
                        <Text>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#E8E8E8', padding: 10, borderRadius: 20, marginRight: 10 }}>
                        <Text>Hot Dog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#E8E8E8', padding: 10, borderRadius: 20 }}>
                        <Text>Burger</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Open Restaurants Section */}
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>Open Restaurants</Text>
                    <Text style={{ color: '#FF7622' }}>See All</Text>
                </View>

                {/* Restaurant Cards */}
                <View style={{ marginTop: 10 }}>
                    {/* First Restaurant */}
                    <View style={{ backgroundColor: '#E8E8E8', borderRadius: 10, padding: 10, marginBottom: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rose Garden Restaurant</Text>
                        <Text style={{ color: '#B5B5B5' }}>Burger - Chicken - Riche - Wings</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <FontAwesome name="star" size={16} color="#FF7622" />
                            <Text style={{ marginLeft: 5 }}>4.7</Text>
                            <Text style={{ marginLeft: 20 }}>Free</Text>
                            <MaterialIcons name="timer" size={16} color="#B5B5B5" style={{ marginLeft: 20 }} />
                            <Text style={{ marginLeft: 5 }}>20 min</Text>
                        </View>
                    </View>

                    {/* Second Restaurant */}
                    <View style={{ backgroundColor: '#E8E8E8', borderRadius: 10, padding: 10 }}>
                        {/* Add second restaurant details here */}
                    </View>
                    <Button onPress={logout}>logout</Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;


