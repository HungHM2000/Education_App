import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Topic = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <Text style={styles.text2}>Khoa Hoc</Text>
      <TouchableOpacity>
        <Text style={{padding: 8, color: 'green'}}> Xem tat ca (24) </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Topic;

const styles = StyleSheet.create({
  text1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
