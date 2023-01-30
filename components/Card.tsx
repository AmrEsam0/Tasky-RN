import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

type Props = {};

export default function Card({}: Props) {
	const [count, setCount] = useState(0);
	var disabled = count >= 1;
	return (
		<View style={styles.card}>
			<Text style={[styles.title, styles.baseText]}>My Counter</Text>
			<Text style={[styles.baseText, styles.number]}>{count}</Text>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setCount(count + 1)}
				>
					<Text style={[styles.baseText, styles.buttonText]}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, disabled ? null : styles.buttonDisabled]}
					disabled={disabled ? false : true}
					onPress={() => setCount(count - 1)}
				>
					<Text
						style={[
							styles.baseText,
							disabled ? styles.buttonText : styles.title,
						]}
					>
						-
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

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
