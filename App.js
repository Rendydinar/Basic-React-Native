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
import SampleComponent from "./src/pages/SampleComponent"
import StylingComponent from "./src/pages/StylingComponent"
import CardProduct from "./src/pages/CardProduct"
import FlexBox from "./src/pages/FlexBox"
import Position from "./src/pages/Position"
const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, [])

  return (
    <View>
      <ScrollView>
        <StylingComponent />
        <CardProduct />
        <SampleComponent />
        <FlexBox/>
        <Position/>
      </ScrollView>
    </View>
  );
};

export default App;
