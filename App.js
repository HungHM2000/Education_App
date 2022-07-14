import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/screen/Login';
import ProfileScreen from './src/screen/ProfileScreen';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;