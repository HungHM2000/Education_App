import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Subject from '../Components/Subject/Subject';
import Topic from '../Components/Topic/Topic';

const ListScreen = () => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Text style={styles.text}>Kham Pha</Text>
      <View style={{width: '100%', height: '100%'}}>
        <ScrollView style={{width: '100%', height: '100%'}}>
          <Topic />
          <ScrollView horizontal={true} style={{width: '100%', height: '100%'}}>
            <View>
              <Subject />
            </View>
            <View>
              <Subject />
            </View>
          </ScrollView>
          <Topic />
          <ScrollView horizontal={true} style={{width: '100%', height: '100%'}}>
            <View>
              <Subject />
            </View>
            <View>
              <Subject />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
});
