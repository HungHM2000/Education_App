import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileScreen from './src/screen/ProfileScreen'


const App = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileScreen/>
    </View>
  )
}

export default App;