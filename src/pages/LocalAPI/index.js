import React, {useState, useEffect} from 'react'
import { 
	View, 
	Text, 
	StyleSheet,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
	Alert
} from 'react-native'
import Avatar from "../../assets/image/avatar.jpeg"
import axios from "axios"
import EmptyUserSvg from "../../assets/icons/empty-user.svg"

const API_URL = "http://localhost:3004";
// const API_URL = "http://10.0.2.2:3004"; // API ALIAS FROM EMULATOR
// const API_URL = "http://192.168.1.4:3004"; // LOCAL IP ADDRESS 

const LocalAPI = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [bidang, setBidang] = useState("")
	const [selectedUser, setSelectedUser] = useState({})
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isUpdate, setIsUpdate] = useState(false);
	const submit = () => {
		if(isUpdate) {
			// Update data 
			axios.put(`${API_URL}/users/${selectedUser.id}`, {
				name,
				email,
				bidang
			})
			.then(res => {
				console.log('res: ', res)
				clearState();
				getData();
				setIsUpdate(false);
			})
		} else {
			// Post data
			axios.post(`${API_URL}/users`, {
				name,
				email,
				bidang
			})
			.then(res => {
				console.log('res: ', res)
				clearState();
				getData();
			})
		}
	}

	const clearState = () => {
		setName("");
		setEmail("");
		setBidang("");
	}

	const getData = () => {
		setLoading(true);
		axios.get(`${API_URL}/users`)
		.then(res => {
			console.log('res.data',res.data)
			setUsers(res.data);
			console.log('users', users)
			setLoading(false);
		})
	}

	const deteleUser = (user) => {
		console.log(user)
		axios.delete(`${API_URL}/users/${user.id}`)
		.then(res => {
			console.log(res)
			getData();
		})
	}

	const selectItem = (user) => {
		setName(user.name);
		setEmail(user.email);
		setBidang(user.bidang);
		setSelectedUser(user);
		setIsUpdate(true);
	}

	const Item = (userData, onDelete, key, onPressUpdate) => {
		console.log(userData.user)
		const handleOnPress = () => {
			console.log('pres')
			onPressUpdate()
		}
		return (
			<View style={styles.itemContainer} key={key}>
				<TouchableOpacity onPress={() => selectItem(userData.user)}>
					<Image style={styles.avatar} source={Avatar}	/>			
				</TouchableOpacity>
				<View style={styles.desc}>
					<Text style={styles.descName}>{userData.user.name}</Text>
					<Text style={styles.descEmail}>{userData.user.email}</Text>
					<Text style={styles.descBidang}>{userData.user.bidang}</Text> 
				</View>
				<TouchableOpacity onPress={
					() =>  Alert.alert(
						'Peringatan',
						'Anda yakin akan menghapus user ini ?', 
						[	
							{
								text: 'Tidak', 
								onPress: () => console.log('button tidak')
							}, 
							{
								text: 'Ya',
								onPress: () => deteleUser(userData.user)
							}
						]
					)
				}>
					<Text style={styles.delete}>X</Text> 
				</TouchableOpacity>
			</View>
		)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<View>
			<Text style={styles.textTitleSection}>Masukan Anggota Ninja Coder</Text>
	 		<View style={styles.container}>
				<Text style={styles.textTitle}>Local API (JSON-SERVER) </Text>
				<TextInput placeholder="Nama" style={styles.input} value={name} onChangeText={(value) => setName(value)}></TextInput>
				<TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)}></TextInput>
				<TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}></TextInput>
				<Button title={isUpdate?  "Update": "Simpan"} onPress={submit} style={styles.btnSubmit} />
				<View style={styles.line} />
				{users.length === 0 ? (
					<View style={styles.containerEmptyUser}>
						<EmptyUserSvg 
							width={244}
							height={125}
						/>		
						<Text style={styles.ninjaEmptyInfo}>Oh, tidak kita tidak memiliki ninja</Text>
					</View>
				) : (
					loading === false && users.map((user, index) => (
						<Item 
							user={user} 
							onPressUpdate={() => selectItem(user.user)}
							onDelete={() => 
								Alert.alert(
								'Peringatan',
								'Anda yakin akan menghapus user ini ?', 
								[	
									{
										text: 'Tidak', 
										onPress: () => console.log('button tidak')
									}, 
									{
										text: 'Ya',
										onPress: () => deteleUser(user.user)
									}
								]
							)} 
							key={index}
						/>
					))
				)}
			</View>
		</View>
	) 
}

const styles =  StyleSheet.create({
	container: {
		padding: 20
	},
	textTitleSection: {
		textAlign: 'center',
		fontSize: 25,
		fontWeight: "700",
		color: '#ffffff',
		marginBottom: 10,
		backgroundColor: '#1dd1a1',
		paddingTop: 30,
		paddingBottom: 30,
	},
	textTitle: {
		textAlign: 'center',
		marginBottom: 20,
		display: 'none'
	},
	line: {
		height: 2,
		backgroundColor: 'black',
		marginVertical: 20
	},
	input: {
		borderWidth: 1, 
		marginBottom: 10, 
		borderRadius:  25, 
		paddingHorizontal: 18
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 80
	},
	itemContainer: { flexDirection: 'row', marginBottom: 20 },
	desc: { marginLeft: 18, flex: 1 },
	descName: { fontSize: 20, fontWeight: 'bold'},
	descEmail: { fontSize: 16}, 
	descBidang: {fontSize: 12, marginTop: 8 },
	delete: {
		fontSize: 20,
		fontWeight: "bold",
		color: "red"
	},
	btnSubmit: {
		height: 20,
		borderRadius: 50,
		color: '#55efc4'
	},
	containerEmptyUser: {
		textAlign: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	ninjaEmptyInfo: {
		color: '#1dd1a1',
		fontSize: 20,
		fontWeight: '700'
	}
})

export default LocalAPI