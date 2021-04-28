/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import SampleComponent from "./SampleComponent"
import StylingReactNaviteComponent from "./StylingReactNaviteComponent"
import CardProduct from "./CardProduct"
import MateriFlexBox from "./MateriFlexBox"
import PositionReactNative from "./PositionReactNative"
const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, [])

  return (
    <View>
      <ScrollView>
        <StylingReactNaviteComponent />
        <CardProduct />
        <SampleComponent />
        <MateriFlexBox/>
        <PositionReactNative/>
      </ScrollView>
    </View>
  );
};

export default App;
