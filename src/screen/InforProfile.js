import { View, Text, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Entypo';

const InforProfile = () => {

    const [inputtext, setinputtext] = useState('');


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarWrap}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyYPpSOn_kpXBtE4wJ50MCIJ9J7bBAq8_swh03mb1kml7lGqF' }}
                />
                <View style={styles.iconView}>
                    <Icon name="camera" size={25} color="#3D9C8A" style={styles.icon} />
                </View>
                <View style={styles.text}>
                    <TextInput maxLength={50} style={styles.inputText} onChangeText={setinputtext} value={inputtext} />
                    {inputtext &&
                        (<Icon.Button name='circle-with-cross' size={20} color="#a5a8a6"
                            backgroundColor="#fff" style={{ marginTop: 10 }} onPress={() => setinputtext('')}>
                            </Icon.Button>)}
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    avatar: {
        width: '100%',
        height: '80%'
    },
    avatarWrap: {
        position: 'relative',
        marginTop: '5%',
    },

    iconView: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '68%',
        right: 0,
        marginLeft: '5%'
    },
    icon: {
        backgroundColor: '#F2EFF0',
        borderRadius: 20,
        padding: 8,
    },
    inputText: {
        width: '90%'
    },
    text: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
    },

})

export default InforProfile