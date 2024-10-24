import { ScrollView, Text, View, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CButton from "../components/CButton";

import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";

export default function App() {
	const { session, loading } = useAuth();

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	if (session) {
		router.replace("/home");
	}

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full flex justify-center items-center h-full px-4">
					<Image
						source={images.logo}
						className="w-[130px] h-[84px]"
						resizeMode="contain"
					/>

					<Image
						source={images.cards}
						// className="w-[300px] h-[200px]"
						className="max-w-[380px] w-full h-[300px]"
						resizeMode="contain"
					/>

					<View className="relative mt-5">
						<Text className="text-3xl text-white font-bold">
							Discover Endless possibilities with{" "}
							<Text className="text-secondary-200">Aura</Text>
						</Text>

						<Image
							source={images.path}
							className="w-[130px] h-[15px] absolute -bottom-2 -right-8"
						/>
					</View>

					<Text className=" text-sm font-pregular text-gray-100 mt-7 text-center">
						Where creativity meets creation: Embar on a journey of limitless
						exploration with Aura
					</Text>

					<CButton
						title="Continue with Email"
						handlePress={() => router.push("/sign-in")}
						containerStyles="w-full mt-7"
					/>
				</View>
			</ScrollView>
			<StatusBar style="light" backgroundColor="#161612" />
		</SafeAreaView>
	);
}
