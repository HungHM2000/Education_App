import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
const Subject = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://img.freepik.com/free-vector/student-studying-using-laptop-lying-bench-campus-park_1262-20686.jpg?w=2000',
          }}
        />
        <Text style={styles.text3}>
          BGD Môn Địa Lí THPT - GVPT ( Two line case ) ...
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text>Thời lượng : </Text>
          <Text style={{color: 'orange'}}> 30 phút</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Progress.Bar progress={0.5} width={200} style={{marginTop: 18}} />
          <View>
            <Text style={{color: 'orange', marginTop: 18, marginLeft: 8}}>
              50%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 300,
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  tinyLogo: {
    width: '100%',
    height: '50%',
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
