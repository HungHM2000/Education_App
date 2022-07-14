import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import IntroductComponent from './IntroductComponent';

export default function YoutubeComponent() {
  return (
    <View style={{backgroundColor: '#FFF', width: '100%', height: '65%'}}>
      <Image
        source={{
          uri: 'https://www.roadtovr.com/wp-content/uploads/2015/03/youtube-logo2.jpg',
        }}
        style={styles.styleImage}></Image>
      <View>
        <View style={styles.styleView1}>
          <Text numberOfLines={2} style={styles.styleText1}>
            Bài 3: Môn Địa Lý THPT - GVPT (Two Line Case)
          </Text>
        </View>
        <View style={styles.styleView2}>
          <Text style={styles.styleText2}>Thời gian: </Text>
          <Text style={styles.styleText3}>30/06/2022</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: '55%',
  },
  styleView1: {
    marginHorizontal: 12,
    marginTop: 20,
  },
  styleView2: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 10,
  },
  styleText1: {
    fontSize: 25,
    color: '#000000',
  },
  styleText2: {
    fontSize: 16,
  },
  styleText3: {
    fontSize: 16,
    color: '#f39c12',
  },
});
