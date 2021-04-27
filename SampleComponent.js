
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
      style={{width: '100%', height:500}}
    />
  )
}

class BoxGreen extends Component {
  render() {
    return (
      <Text> Class Component </Text>
    )
  }
}

const SampleCompoent = () => {
  return (
    <View style={{backgroundColor: '#74b9ff', height: '100%', width: '100%'}}>
      <StatusBar 
        barStyle={'dark-content'} 
      />
      <Header />
      <Text>Rendy</Text>
      <Hero/>
      <TextInput
        style={{
          borderWidth: 1,
        }}
      />
      <BoxGreen />
    </View>
  )
}

export default SampleCompoent;
