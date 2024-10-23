import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, router } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

const AuthLayout = () => {
	// const { session } = useAuth();

	// if (session) {
	// 	// router.replace("/home");

	// 	return <Redirect href="/home" />;
	// }
	return (
		<>
			<Stack>
				<Stack.Screen name="sign-up" options={{ headerShown: false }} />
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
			</Stack>
		</>
	);

	// return <Stack />;
};

export default AuthLayout;
