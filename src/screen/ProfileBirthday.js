import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfileBirthday = () => {
    
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow()
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return ( 
        <SafeAreaView>
           
            <View>
                
                <Text>Chọn ngày sinh</Text>
                <Icon.Button name='date' size={20} color="#a5a8a6"
                    backgroundColor="#fff" style={{ marginTop: 10 }}>
                </Icon.Button>
                
            </View>
        </SafeAreaView>
    
    )
}

export default ProfileBirthday