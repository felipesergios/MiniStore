import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
//import Card from '../src/components/Card'
import logo from '../../assets/favicon.png'
export default function Home() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>GameClub</Text>
      <Image styles={styles.logo} source={logo}/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F17EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#FFF',
    fontSize:30,
    fontFamily:'Arial',
    top:-10
  },
  logo: {
    width: 10,
    height: 10,
  },
});
