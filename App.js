import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import DetailScreen from './src/screen/DetailScreen';

export default function App() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <DetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
