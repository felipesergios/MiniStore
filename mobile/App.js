import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,ScrollView } from 'react-native';
import Card from './src/components/Card';
import Home from './src/components/Home'

export default function App() {
  return (
    <View style={styles.container}>
      
     <Home/>
      <StatusBar style="auto" />
    <ScrollView style={styles.Scroll}>
      <Card/>

      <Card/>

      <Card/>

      <Card/>

      <Card/>

    </ScrollView>
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
  Scroll:{
    flex:1,
    top:-100
  }
})

