import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  View,  
  Image,
	StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import MacBook from "../../assets/image/mac.jpg"

const Product = (props) => {
	return (
		<View style={styles.wrapper}>
      <Image
        source={MacBook}
        style={styles.imageProduct}
      />
      <Text style={styles.productName} >
        New MacBook 2020
      </Text>
      <Text style={styles.productPrice} >
        Rp. 25.000.000
      </Text>
      <Text style={styles.location} >
        Jakarta Barat
      </Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper} >
          <Text style={styles.buttonText} > 
            Beli 
          </Text>
        </View>      
      </TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 12,
		backgroundColor: "#F2F2F2",
		width: 212,
		borderRadius: 8
	},
	imageProduct: {
		width: 188,
		height: 107,
		borderRadius: 8
	},
	productName: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#F2994A',
		marginTop: 12
	},
	location: {
		fontSize: 12,
		fontWeight: '300',
		marginTop: 12
	},
	productPrice:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
})


export default Product