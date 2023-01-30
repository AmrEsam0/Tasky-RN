import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Card from "./components/Card";

export default function App() {
	return (
		<View style={styles.container}>
			<Card />
			<StatusBar style="inverted" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0D152A",
		alignItems: "center",
		justifyContent: "center",
	},
});
