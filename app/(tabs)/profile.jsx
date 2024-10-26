import {
	ActivityIndicator,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useCallback } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { usePostById } from "../../api";
import { icons, images } from "../../constants";
import PostCard from "../../components/PostCard";

const Profile = () => {
	const { profile } = useAuth(); // Assuming useAuth() gives user profile info
	const userId = profile?.id; // Get user's ID (UUID)

	const { data: posts, isLoading, error } = usePostById(userId);

	// const renderPosts = useCallback(({ item }) => {
	// 	console.log("item-->", item);
	// 	return (
	// 		<View className="flex-1">
	// 			<Text className="text-white">{"item.author"}</Text>
	// 			<Text className="text-white">{item.id}</Text>
	// 		</View>
	// 	);
	// }, []);

	// Loading state
	if (isLoading)
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size={"large"} color="red" />
			</View>
		);

	// Error state
	if (error) return <Text>Error: {error.message}</Text>;

	// if (!profile) return;

	const renderPosts = ({ item }) => {
		return (
			<View>
				<Text className="text-white">{item.id}</Text>
			</View>
		);
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<FlatList
				data={posts}
				renderItem={({ item }) => {
					return <PostCard post={item} />;
				}}
				ListHeaderComponent={() => {
					return (
						<View>
							<View className="flex-row justify-between mx-4">
								<View>
									<Text className="text-xl font-pregular text-white flex-1">
										Welcome Back,
									</Text>

									<Text className="text-xl  text-white font-psemibold">
										{profile?.username}
									</Text>
								</View>

								<View>
									<TouchableOpacity>
										<Image
											source={icons.logout}
											resizeMode="contain"
											className="h-6 w-6"
										/>
									</TouchableOpacity>
								</View>
							</View>

							<View className=" flex-row self-center justify-between w-40 mt-10 ">
								<View className=" items-center justify-center ">
									<Text className="text-white text-xl font-pmedium">
										{posts.length}
									</Text>
									<Text className="text-white text-xl">posts </Text>
								</View>

								<View>
									<Text className="text-white text-xl font-psemibold">
										{123}k
									</Text>
									<Text className="text-white text-xl font-pregular">
										Views{" "}
									</Text>
								</View>
							</View>
						</View>
					);
				}}
			/>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({});
