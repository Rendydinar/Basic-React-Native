import React, {useState, useEffect} from 'react'
import { 
	StyleSheet, 
	View, 
	Text,
	Image,
} from 'react-native'
import Cart from "../../components/Cart"
import Product from "../../components/Product"

const Communicatoin = () => {
	const [quantity, setQuantity] = useState(0)

	const onButtonPress = () => {
		setQuantity(quantity+1)		
	}
	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Communicatoin Between Component</Text>
			<Cart quantity={quantity} />
			<Product onButtonPress={onButtonPress} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	textTitle: {
		fontSize: 20, 
		fontWeight: 'bold', 
		textAlign: 'center'
	},
})

export default Communicatoin