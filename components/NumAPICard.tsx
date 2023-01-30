import React, { useCallback, useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Alert,
} from "react-native";

type Props = {};

export const NumAPICard = (props: Props) => {
	const [trivia, setTrivia] = useState("");
	const [number, setNumber] = useState(0);
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		fetch(`http://numbersapi.com/${number}`)
			.then((response) => response.text())
			.then((triviaFull) => {
				const trivia = triviaFull.slice(5);
				setTrivia(trivia);
			});
	}, [isPressed]);

	return (
		<View style={styles.card}>
			<Text style={[styles.title, styles.baseText]}>My Numbers</Text>

			<View style={styles.buttonRow}>
				<TextInput
					style={[styles.input, styles.number]}
					value={number.toString() === "NaN" ? "0" : number.toString()}
					keyboardType="numeric"
					onChangeText={(text) => {
						text === "" ? setNumber(0) : setNumber(parseInt(text));
					}}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setIsPressed(!isPressed)}
				>
					<Text style={[styles.baseText, styles.buttonText]}>Get Trivia</Text>
				</TouchableOpacity>
			</View>
			<Text style={[styles.baseText, styles.trivia]}>{trivia}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 0.6,
		width: "95%",
		alignItems: "center",
		justifyContent: "space-evenly",
		borderColor: "#FFFFFF19",
		borderWidth: 1,
		borderRadius: 6,
		elevation: 9,
		shadowColor: "#2C2A579C",
		// background color must be set
		backgroundColor: "#2C2A57",
	},
	buttonRow: {
		width: 300,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	button: {
		backgroundColor: "#EBEBEB",
		borderRadius: 3,
		width: 120,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
	},
	baseText: {
		color: "#fff",
		textAlign: "center",
	},
	trivia: {
		flex: 0.6,
		fontSize: 24,
		paddingHorizontal: 6,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#2C2A57",
		padding: 8,
	},
	number: {
		fontSize: 28,
	},

	input: {
		margin: 12,
		borderWidth: 1,
		borderColor: "#EBEBEB",
		padding: 10,
		width: "50%",
		color: "#ffffff",
		textAlign: "center",
	},
});
