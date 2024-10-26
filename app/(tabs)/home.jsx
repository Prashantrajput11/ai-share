import {
	View,
	Text,
	Button,
	FlatList,
	Image,
	ActivityIndicator,
	Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { supabase } from "../../Lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import { useQuery } from "@tanstack/react-query";
import { usePosts } from "../../api";
import PostCard from "../../components/PostCard";
const Home = () => {
	const { profile } = useAuth();

	const signOut = async () => {
		await supabase.auth.signOut();
	};

	const handleSearch = () => {
		console.log("searchh");
	};

	const { data, error, isLoading } = usePosts();

	// if (isLoading) {
	// 	return <ActivityIndicator />;
	// }
	// if (error) {
	// 	<Text>Failed to fetch data</Text>;
	// }

	// Return
	return (
		<SafeAreaView className="bg-primary ">
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return <PostCard post={item} />;
				}}
				contentContainerStyle={{ marginHorizontal: 14 }}
				ListHeaderComponent={() => {
					return (
						<>
							<View className="flex-row justify-between space-y-4 mx-4">
								<View>
									<Text className="text-xl font-pregular text-white">
										Welcome Back,
									</Text>
									<Text className="text-5xl mt-2 text-white font-psemibold">
										{profile?.username}
									</Text>
								</View>

								<View>
									<Image
										source={images.logoSmall}
										className="w-9 h-9"
										resizeMode="contain"
									/>
								</View>
							</View>

							<SearchInput onPress={handleSearch} />

							<Pressable onPress={signOut}>
								<Text className="text-white">Sign Out</Text>
							</Pressable>

							<View className="my-4 items-center">
								<Text className="text-white text-xl font-pregular">
									Latest Videos{" "}
								</Text>

								<Trending list={[{ id: 1 }, { id: 2 }]} />
							</View>
						</>
					);
				}}
			/>

			{/* <Button onPress={signOut} title="sign out" /> */}
		</SafeAreaView>
	);
};

export default Home;
