import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const IntroductComponent = () => {
  const Tab = createMaterialTopTabNavigator();

  const Introduces = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={styles.styleSubject}>Môn Địa lý 10</Text>
      </View>
    );
  };

  const Content = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
        }}></ScrollView>
    );
  };

  const Comment = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
        }}></ScrollView>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'none',
          },
        }}>
        <Tab.Screen name="Giới Thiệu" component={Introduces} />
        <Tab.Screen name="Nội Dung" component={Content} />
        <Tab.Screen name="Bình Luận" component={Comment} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default IntroductComponent;

const styles = StyleSheet.create({
  styleSubject: {
    fontSize: 18,
    fontWeight: '700',
    margin: 10,
  },
});
