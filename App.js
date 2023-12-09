import React from "react";
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Inputs from "./Components/Inputs";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.ViewContiner}>
        <View 
            style={{
              backgroundColor: '#00B5A2',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 2 
              }}>
          <Text style={{fontSize: 22}}>صفحة تسجيل الدخول</Text>
        </View>
      </View>
      <Inputs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //padding: 45,
    //paddingRight: 30,
    marginVertical: 50, 
  },
  ViewContiner: {
    padding: 30,
    flexDirection: 'row',
    width: '100%',
    height: 100, 
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
