import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Eye from "react-native-vector-icons/Entypo";

const Login = () => {
    const [textemail, onChangeText] = useState("");
    const [textpassword, onChangeNumber] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <LinearGradient colors={['#024D91', '#024D91']} style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/lock-and-key-4922745-4097192.png' }}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={textemail}
                    placeholder="Email"
                />
                <View style={styles.inputPasswordWrap}>
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={onChangeNumber}
                        value={textpassword}
                        placeholder="Password"
                        secureTextEntry={passwordVisible}
                    />
                    <Eye
                        name={passwordVisible ? 'eye' : 'eye-with-line'}
                        size={20}
                        color='black'
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.title}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={null}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.textStyle}
                        activeOpacity={.5}
                    >Log In</Text>
                </TouchableOpacity>
                <View style={styles.loginGoogle}>
                    <Text style={styles.titleOr}>or</Text>
                    <TouchableOpacity
                        style={styles.buttonGoogle}
                        onPress={null}
                    >
                        <Image
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png' }}
                            style={styles.logoGoogle}
                            resizeMode="stretch"
                        />
                        <Text>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 30,
    },
    logo: {
        width: "80%",
        height: "100%",
    },
    input: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D2D2D2",
        paddingHorizontal: 30,
    },
    inputPasswordWrap:{
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D2D2D2",
        paddingHorizontal: 27,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputPassword:{
        flex: 1,
        marginRight: 15,
        // backgroundColor: 'green'
    },
    title: {
        paddingLeft: 30,
        marginTop: 20
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonStyle: {
        width: '80%',
        marginTop: 30,
        paddingVertical: 10,
        backgroundColor: '#969696',
        borderRadius: 20,
        alignSelf: 'center'
    },
    loginGoogle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonGoogle: {
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 1,
        shadowRadius: 7,
        elevation: 4,
        flexDirection: 'row'
    },
    titleOr: {
        marginRight: 20,
    },
    logoGoogle: {
        width: 30,
        height: 30,
        marginRight: 20,
    }
})

export default Login