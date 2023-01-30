import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

type Props = {};

export default function Card({}: Props) {
	const [count, setCount] = useState(0);
	var disabled = count >= 1;
	return (
		<View style={styles.card}>
			<Text style={[styles.title, styles.baseText]}>My Card</Text>
			<Text style={[styles.baseText, styles.number]}>{count}</Text>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setCount(count + 1)}
				>
					<Text style={[styles.baseText, styles.title]}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, disabled ? null : styles.buttonDisabled]}
					disabled={disabled ? false : true}
					onPress={() => setCount(count - 1)}
				>
					<Text style={[styles.baseText, styles.title]}>-</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		height: 500,
		alignItems: "center",
		justifyContent: "space-evenly",
		borderColor: "#FFFFFF19",
		borderWidth: 1,
		borderRadius: 3,
	},
	buttonRow: {
		width: 300,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	button: {
		backgroundColor: "#105192",
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
	title: {
		fontSize: 40,
		fontWeight: "bold",
	},
	number: {
		fontSize: 80,
	},
	buttonDisabled: {
		backgroundColor: "#2C2C2C",
	},
});
