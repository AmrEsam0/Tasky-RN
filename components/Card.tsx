import Lottie from "lottie-react-native";
import React, { useState } from "react";
import {
	Text,
	StyleSheet,
	Button,
	View,
	TouchableOpacity,
	Image,
	ImageComponent,
} from "react-native";

type Props = {};

export const Card = (props: Props) => {
	const [count, setCount] = useState(0);
	var disabled = count >= 1;
	return (
		<View style={styles.card}>
			{/* <Lottie source={require("../assets/launch.json")} /> */}
			<Text style={[styles.baseText, styles.title]}>Card </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 0.6,
		width: "95%",
		alignItems: "center",
		justifyContent: "space-evenly",
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
