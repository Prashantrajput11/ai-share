import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "@/providers/AuthProvider";

const PostCard = ({ post }) => {
	console.log("post", post);
	const { profile } = useAuth(); // Assuming useAuth() gives user profile info
	const userId = profile?.id; // Get user's ID (UUID)

	const canEdit = userId === post.user_id;
	const renderCardHeader = () => {
		return (
			<View className="flex-row items-center p-3">
				<Image source={images.ai1} className="h-12 w-12 rounded-full mr-3" />
				<View className="flex-1 ">
					<Text className="text-lg font-semibold text-white">
						{post.author ? post.author : "Esther Howard"}
					</Text>
					<Text className="text-xs text-gray-400 mt-1">Just now</Text>
				</View>
				{canEdit && (
					<TouchableOpacity className="flex-row items-center">
						<AntDesign name="edit" size={20} color="white" />
						{/* <Text className="ml-2 text-white text-base">Edit</Text> */}
					</TouchableOpacity>
				)}
			</View>
		);
	};

	const renderFooter = () => {
		return (
			<View className="flex-row justify-around items-center bg-slate-800 border-t border-slate-600 p-3">
				<TouchableOpacity className="flex-row items-center">
					<AntDesign name="hearto" size={20} color="white" />
					<Text className="ml-2 text-white text-base">Like</Text>
				</TouchableOpacity>
				<TouchableOpacity className="flex-row items-center">
					<AntDesign name="message1" size={20} color="white" />
					<Text className="ml-2 text-white text-base">Comment</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View className="bg-slate-800 rounded-lg overflow-hidden my-3 shadow-lg">
			{renderCardHeader()}
			<View className="px-3 pb-3">
				<Text className="text-base text-white mb-2">{post.description}</Text>
			</View>
			<Image source={images.ai1} className="w-full h-52" resizeMode="cover" />
			{/* {renderFooter()} */}
		</View>
	);
};

export default PostCard;
