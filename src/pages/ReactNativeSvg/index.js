import React from 'react'
import { View, Text } from 'react-native'
import MyAppSvg from "../../assets/icons/my_app.svg"

const ReactNativeSvg = () => {
	return (
		<View>
			<Text>
				Materi Menggunakan React Native Svg
			</Text>
			<MyAppSvg 
				width={244}
				height={125}
			/>
		</View>
	)
}

export default ReactNativeSvg