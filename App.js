/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import MacBook from "./mac.jpg"

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
      style={{width: '100%', height: '50%'}}
    />
  )
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

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00b894',
    marginTop: 30,
    marginLeft: 20
  }
});

const StylingReactNaviteComponent = () => {
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

const CardProduct = () => {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8
      }}
    >
      <Image
        source={MacBook}
        style={{
          width: 188,
          height:107,
          borderRadius: 8
        }}
      />
      <Text
        style={{
           fontSize: 14,
           fontWeight: 'bold',
           marginTop: 16
        }}
      >
        New MacBook 2020
      </Text>
      <Text 
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#F2994A',
          marginTop: 12
        }}
      >
        Rp. 25.000.000
      </Text>
      <Text 
        style={{
          fontSize: 12,
          fontWeight: '300',
          marginTop:12
        }}
      >
        Jakarta Barat
      </Text>
      <View
        style={{
          backgroundColor: '#6FCF97',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
          }}
        > 
          Beli 
        </Text>
      </View>

    </View>
  )
}

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, [])

  return (
    <View>
    <StylingReactNaviteComponent />
    <CardProduct />
    </View>
  );
};

class BoxGreen extends Component {
  render() {
    return (
      <Text> Class Component </Text>
    )
  }
}

export default App;
