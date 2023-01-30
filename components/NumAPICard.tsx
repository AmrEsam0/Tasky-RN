import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {};

export const NumAPICard = (props: Props) => {
	const [trivia, setTrivia] = useState("");
	const [number, setNumber] = useState(0);

	useEffect(() => {
		fetch(`http://numbersapi.com/${number}`)
			.then((response) => response.text())
			.then((triviaFull) => {
				const trivia = triviaFull.slice(5);
				setTrivia(trivia);
			});
	}, [number]);
	return (
		<View style={styles.card}>
			<Text style={[styles.title, styles.baseText]}>My Numbers</Text>
			<Text style={[styles.baseText, styles.number]}>{number}</Text>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setNumber(number + 1)}
				>
					<Text style={[styles.baseText, styles.buttonText]}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setNumber(number - 1)}
				>
					<Text style={[styles.baseText, styles.buttonText]}>-</Text>
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
		fontSize: 40,
		fontWeight: "bold",
		color: "#2C2A57",
	},
	number: {
		fontSize: 80,
	},
	buttonDisabled: {
		backgroundColor: "#2C2C2C",
	},
});
