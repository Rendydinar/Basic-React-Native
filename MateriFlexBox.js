
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

const MateriFlexBox = () => {
	return (
		<View>
			<Text
				style={{
					textAlign: 'center',
					backgroundColor: '#b2bec3',
					height: 60,
					paddingTop: 30
				}}

			>
				MateriFlexBox
			</Text>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: '#dfe6e9',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<View
					style={{
						backgroundColor: '#e84393',
						width: 50,
						height: 50
					}}
				></View>
				<View
					style={{
						backgroundColor: '#ff7675',
						width: 50,
						height: 100
					}}
				></View>
				<View
					style={{
						backgroundColor: '#00cec9',
						width: 50,
						height: 150
					}}
				></View>
				<View
					style={{
						backgroundColor: '#55efc4',
						width: 50,
						height: 200
					}}
				></View>			
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around'
				}}
			>
				<Text>Beranda</Text>
				<Text>Video</Text>
				<Text>Playlist</Text>
				<Text>Komunitas</Text>
				<Text>Chanel</Text>
				<Text>Tentang</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 20
				}}
			>
				<Image
					source={{
						uri: "https://www.rendydinar.dev/static/7887daef9ef054b1487a3d9b7ba697c6/ee604/hero-img.png"
					}}
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						marginLeft: 14,
					}}
				/>
				<View
					style={{
						marginLeft: 5,
					}}
				>
					<Text>Rendy Dendimara</Text>
					<Text>Software Engineer</Text>
				</View>
			</View>
		</View>
	)
}

export default MateriFlexBox;