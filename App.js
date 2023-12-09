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
            style={styles.BarStyle}>
          <Text style={styles.TextStyle}>صفحة تسجيل الدخول</Text>
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
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    height: 80, 
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#2f3e46',
  },
  BarStyle: {
    backgroundColor: '#2f3e46',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2 
  },
  TextStyle: {
    fontSize: 22,
    color: 'white',
  },
});
