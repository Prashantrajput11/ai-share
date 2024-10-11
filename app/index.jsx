import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Link href="/profile">
				<Text>to profile</Text>
			</Link>
			<Text className="text-3xl text-red-500 font-pbold">Aura</Text>
		</View>
	);
}
