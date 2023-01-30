import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Card } from "./components/Card";
import { NumAPICard } from "./components/NumAPICard";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.mainHeader}>My App</Text>
			{/* <Card /> */}
			<NumAPICard />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EBEBEB",
		alignItems: "center",
		justifyContent: "center",
	},
	mainHeader: {
		alignSelf: "flex-start",
		fontSize: 90,
		flex: 0.2,
		color: "#2C2A57",
		marginBottom: 20,
	},
});
