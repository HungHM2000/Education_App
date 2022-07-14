import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileScreen from './src/screen/ProfileScreen'
import InforProfile from './src/screen/InforProfile'
import IconButton from 'react-native-vector-icons/dist/Entypo';
import ProfileBirthday from './src/screen/ProfileBirthday'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileBirthday/>
    </View>
  )
}

export default App;