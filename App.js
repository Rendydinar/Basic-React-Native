/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, Fragment } from 'react';
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

const Header = () => {
  return (
    <Text style={{backgroundColor: '#0984e3'}}>Header</Text>
  )
}

const Hero = ()=> {
  return (
    <Image
      source={{
        uri: 'https://wallpaperaccess.com/full/24539.jpg'
      }}
      style={{width: '50%', height: '50%'}}
    />
  )
}

const App: () => Node = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, [])

  return (
    <View style={{backgroundColor: '#74b9ff', height: '100%', width: '100%'}}>
      <StatusBar 
        barStyle={'dark-content'} 
      />
      <Header />
      <Text>Rendy Dendimara</Text>
      <Hero/>
      <TextInput
        style={{
          borderWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
