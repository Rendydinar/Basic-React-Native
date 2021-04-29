import React from 'react'
import { 
	View, 
	Text,
	Image,
	StyleSheet,
} from 'react-native'
import cart from "../../assets/icons/cart.png"

const Cart = (props) => {
	return (
		<View>
			<View
				style={styles.cartWrapper}
			>
				<Image 
					source={cart}
					style={styles.iconCart}
				/>
				<Text
					style={styles.notif}
				> {props.quantity}
				</Text>
			</View>
			<Text
				style={styles.text}
			>
				Keranjang Belanja Anda
			</Text>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	wrapper: {
		padding: 20,
		alignItems: 'center',
		marginTop: 20
	},
	iconCart: {
		width: 90,
		height:90
	},
	text: {
		fontSize: 12, 
		color: '#777777',
		fontWeight: '700',
		marginTop: 8
	},
	cartWrapper: {
		borderWidth: 1,
		borderColor: "#4398D1",
		width: 93,
		height: 93,
		borderRadius: 93/2,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	notif: {
		fontSize: 12,
		color: 'white',
		backgroundColor: '#6FCf97',
		padding: 4,
		borderRadius: 25,
		width: 24,
		height: 24,
		position: 'absolute',
		top: 0,
		right: 0,
	},
	titleCourse: {
		color: "#2d3436",
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	}
})