import React, {useState, useEffect} from 'react'
import { 
	StyleSheet, 
	View, 
	Text,
	Image,
	ScrollView
} from 'react-native'
import cart from "../../assets/image/mac.jpg"

const Story = (props) => {
	return (
		<View 
			style={{
				alignItems: 'center',
				marginRight: 20
			}}
		>
			<Image 
				source={{
					uri: props.imgUrl
				}}
				style={{
					width:80,
					height:80,
					borderRadius: 80/2
				}}
			/> 
			<Text
				style={{
					maxWidth: 50,
					textAlign: 'center'
				}}
			>{props.title}</Text>
		</View>
	)
}

const PropsDinamis = () => {
	const [stok, setStok] = useState(10)
	useEffect(() => {
		setTimeout(() => {
			setStok(50);
		}, 4000);
		return () => {
			console.log('did update');
		}
	}, [stok])

	return (
		<View>
			<Text style={styles.titleCourse}>Props Dinamis</Text>
			<ScrollView horizontal>
				<View 
					style={{
						flexDirection: 'row'
					}}
				>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/117721198_123452805846376_7141603249532768410_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4pOwh15MSroAX8NYmtq&edm=ANmP7GQBAAAA&ccb=7-4&oh=1bd69b3b5f76288c66d94e0a87ef027e&oe=608C54E5&_nc_sid=276363&ig_cache_key=MjM4MzQ0Mzg2MDgxNTcwOTM3OA%3D%3D.2-ccb7-4"/>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/117892642_2848349862158425_6886812203745644462_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Fa6O0ugxTEkAX8mOJ_X&edm=AABBvjUBAAAA&ccb=7-4&oh=d17559700dc3b1dcd49b523baaf8791a&oe=60B029E2&_nc_sid=83d603"/>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/156267212_900495914051879_5548049711373855385_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=IF-DwWrWEIUAX8EUM5A&edm=AP_V10EBAAAA&ccb=7-4&oh=9240b14baac88594fc738c4f6233fa6e&oe=60B0AE1B&_nc_sid=4f375e"/>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/117721198_123452805846376_7141603249532768410_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4pOwh15MSroAX8NYmtq&edm=ANmP7GQBAAAA&ccb=7-4&oh=1bd69b3b5f76288c66d94e0a87ef027e&oe=608C54E5&_nc_sid=276363&ig_cache_key=MjM4MzQ0Mzg2MDgxNTcwOTM3OA%3D%3D.2-ccb7-4"/>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/117892642_2848349862158425_6886812203745644462_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Fa6O0ugxTEkAX8mOJ_X&edm=AABBvjUBAAAA&ccb=7-4&oh=d17559700dc3b1dcd49b523baaf8791a&oe=60B029E2&_nc_sid=83d603"/>
					<Story title="mkv.ts" imgUrl="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/156267212_900495914051879_5548049711373855385_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=IF-DwWrWEIUAX8EUM5A&edm=AP_V10EBAAAA&ccb=7-4&oh=9240b14baac88594fc738c4f6233fa6e&oe=60B0AE1B&_nc_sid=4f375e"/>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default PropsDinamis