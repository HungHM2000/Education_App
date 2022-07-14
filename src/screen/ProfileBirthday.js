import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/dist/Fontisto';

const ProfileBirthday = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  
    return ( 
        <SafeAreaView>
           
            <View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Text>Chọn ngày sinh</Text>
                <Icon.Button name='date' size={20} color="#a5a8a6"
                    backgroundColor="#fff" style={{ marginTop: 10 }} onPress={() => setOpen(true)}>
                </Icon.Button>
                
            </View>
        </SafeAreaView>
    
    )
}

export default ProfileBirthday