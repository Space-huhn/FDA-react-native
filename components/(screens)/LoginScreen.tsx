import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import api from "@/services/api";
import { jwtDecode } from "jwt-decode";
import {getItem, removeItem, setItem} from "@/utils/AsyncStorage";



export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    // const navigation = useNavigation();

    const login = async () => {
        try {
            // console.log({"email": email, "password": password})


            const user = await api.user().login({"email": 'rusurobertchampionsx@gmail.com', "password": 'qwerty'});

            console.log(user)

            // {"email": data.username, "password": data.password}


            const decoded = jwtDecode(user.token);

            await setItem('token', user.token)

            // router.push('index');
        } catch (error) {
            console.log(error);
            // setResponseError(true);
        }
    }


    // @ts-ignore
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Log In</Text>
            <Text style={styles.subtitle}>Please sign in to your existing account</Text>

            <View style={{width: '100%', backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 40, height: '75%', borderTopLeftRadius: 24,
                borderTopRightRadius: 24,}}>

                <View style={{width: '100%'}}>
                    {/* Email Input */}
                    <View style={styles.inputWrapper}>
                        <Text style={{textTransform: 'uppercase', fontSize: 13, color: '#32343E'}}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="example@gmail.com"
                            placeholderTextColor="#ccc"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputWrapper}>
                        <Text style={{textTransform: 'uppercase', fontSize: 13, color: '#32343E'}}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="**********"
                                placeholderTextColor="#ccc"
                                secureTextEntry={!isPasswordVisible}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setPasswordVisible(!isPasswordVisible)}
                            >
                                {/* Add your eye icon here */}
                                <Text>{isPasswordVisible ?
                                    <Feather name="eye-off" size={24} color="black" />
                                        :
                                    <Feather name="eye" size={24} color="black" />
                                }</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Remember Me and Forgot Password */}
                <View style={styles.rememberForgotContainer}>
                    <View style={styles.rememberMeContainer}>
                        <TouchableOpacity style={styles.checkbox} />
                        <Text style={styles.rememberMeText}>Remember me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={login}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                </TouchableOpacity>

                {/*/!* Sign Up Link *!/*/}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don’t have an account?</Text>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.signupLink}> SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                {/*/!* Social Media Buttons *!/*/}
                <Text style={styles.orText}>Or</Text>
                <View style={styles.socialIcons}>
                    <TouchableOpacity>
                        {/* Replace with your own Facebook icon */}
                        <Entypo name="facebook-with-circle" size={62} color="#395998" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* Replace with your own Twitter icon */}
                        <Entypo name="twitter-with-circle" size={62} color="#169CE8" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* Replace with your own Apple icon */}
                        <View style={styles.appleIcons}>
                            <FontAwesome5 name="apple" size={32} color="#FFF" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C3C',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 'auto',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputWrapper: {
        flexDirection: 'column',
        gap: 10,
    },
    input: {
        backgroundColor: '#F7F7F7',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        color: '#000',
        width: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        color: '#000',
    },
    eyeIcon: {
        paddingHorizontal: 10,
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
    },
    rememberMeText: {
        color: '#7E8A97',
    },
    forgotPassword: {
        color: '#FF7622',
    },
    loginButton: {
        backgroundColor: '#FF7622',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    signupText: {
        color: '#646982',
    },
    signupLink: {
        color: '#FF7622',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    icon: {
        fontSize: 18,
        color: '#fff',
    },
    appleIcons: {
        borderRadius: 31,
        width: 62,
        height: 62,
        paddingTop: 11,
        paddingLeft: 19,
        backgroundColor: '#1B1F2F',
    }
});
