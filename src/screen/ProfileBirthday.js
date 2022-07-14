import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Fontisto';

const ProfileBirthday = () => {
  
    return ( 
        <SafeAreaView>
           
            <View>
                
                <Text>Chọn ngày sinh</Text>
                <Icon.Button name='date' size={20} color="#a5a8a6"
                    backgroundColor="#fff" style={{ marginTop: 10 }} onPress={() => setOpen(true)}>
                </Icon.Button>
                
            </View>
        </SafeAreaView>
    
    )
}

export default ProfileBirthday