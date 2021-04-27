import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  View,  
  Image,
  Text
} from 'react-native';
import MacBook from "./mac.jpg"

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

export default CardProduct;