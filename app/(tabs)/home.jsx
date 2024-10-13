import { View, Text, Button } from "react-native";
import React from "react";
import { supabase } from "../../Lib/supabase";
import { useAuth } from "@/providers/AuthProvider";

const Home = () => {
	const { signOut, profile } = useAuth();

	console.log("prof", profile);
	return (
		<View>
			<Text>Home</Text>
			<Text>{profile.username}</Text>

			{/* <Button onPress={signOut} title="sign out" /> */}
		</View>
	);
};

export default Home;
