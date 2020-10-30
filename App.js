import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Component from './component/component';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'rgb(0,192,196)',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     <Component />
    </View>
  );
}


