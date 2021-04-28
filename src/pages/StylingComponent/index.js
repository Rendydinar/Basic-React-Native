
import React, { useState, useEffect, Fragment, Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00b894',
    marginTop: 30,
    marginLeft: 20
  }
});

const StylingComponent = () => {
  return (
    <View 
      style={{
        marginBottom: 30
      }}
    >
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100, // ukuran yang fix ()
          height: 100,
          backgroundColor: '#00b894',
          borderWidth: 2,
          borderColor: '#55efc4',
          marginTop: 20
        }}
      >
      </View>
    </View>
  )
}


export default StylingComponent;