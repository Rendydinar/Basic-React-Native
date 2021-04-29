import React, {useState, useEffect, Component} from 'react'
import { 
	StyleSheet, 
	View, 
	Text,
	Image,
	Button,
} from 'react-native'
import cart from "../../assets/image/mac.jpg"


const Counter = () => {
	const [counterBtnClick, setCounterBtnClick] = useState(0)

	return (
		<View>
			<Text
				style={styles.textAlign}
			>State Dinamis</Text>
			<Text>{counterBtnClick}</Text>
			<Button 
				title="tambah" 
				onPress={() => {
					setCounterBtnClick(counterBtnClick+1)
				}}
			/>
		</View>
	)
}

class CounterClass extends Component {
	state = {
		counterBtnClick: 0
	}
	render() {
		return (
			<View>
				<Text>{this.state.counterBtnClick}</Text>
				<Button 
					title="tambah" 
					onPress={() => {
						this.setState({
							counterBtnClick: this.state.counterBtnClick + 1
						})
					}}
				/>
			</View>
		)
	}
}

const StateDinamis = () => {
	return (
		<View style={styles.wrapper}>
			<Text 
				style={styles.titleSection}
			>Function Component</Text>
			<Counter />
			<Counter />
			<Text 
				style={styles.titleSection}
			>Class Component</Text>
			<CounterClass />
			<CounterClass />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 20
	},
	textTitle: {
		textAlign: 'center'
	},
	titleSection: {
		marginTop: 20,
	}
})

export default StateDinamis