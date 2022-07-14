import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const IntroductComponent = () => {
  const Tab = createMaterialTopTabNavigator();

  const Introduces = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}></ScrollView>
    );
  };

  const Content = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
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
        }}></ScrollView>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Giới Thiệu" component={Introduces} />
        <Tab.Screen name="Nội Dung" component={Content} />
        <Tab.Screen name="Bình Luận" component={Comment} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default IntroductComponent;

const styles = StyleSheet.create({});
