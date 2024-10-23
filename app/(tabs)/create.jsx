import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../../constants";
import FormField from "../../components/FormField";
import CButton from "../../components/CButton";
import * as ImagePicker from "expo-image-picker";
import { useInsertPost } from "../../api";

const Create = () => {
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState("");

	const { mutate: insertPost } = useInsertPost();

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);
		setImage(result.assets.uri);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const onCreate = () => {
		console.log("on create pressed");
		insertPost({ image, description });
	};

	console.log("image-->", image);
	return (
		<SafeAreaView className="bg-primary h-full ">
			<ScrollView>
				<Text className="text-white text-2xl font-psemibold">
					Upload Images
				</Text>

				<View className="mt-7">
					<Text className="text-white text-base font-pmedium">
						Upload Your Image
					</Text>

					{image === null ? (
						<View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center mt-4">
							<Pressable
								className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center"
								onPress={pickImage}
							>
								<Image
									source={icons.upload}
									// source={{ uri: image }}
									resizeMode="contain"
									className="h-6 w-6"
								/>
							</Pressable>
						</View>
					) : (
						<View className="w-full h-40 px-4 bg-black-100 rounded-2xl  mt-4">
							<Image
								// source={image !== null ? image : icons.upload}
								source={{ uri: image }}
								resizeMode="contain"
								className="h-full w-full"
							/>
						</View>
					)}

					<FormField
						title="Description"
						// value={form.email}
						value={description}
						handleChangeText={(text) => setDescription(text)}
						otherStyles={"mt-7"}
						// keyboardType="email-address"
					/>

					<CButton
						title="Publish"
						containerStyles={"mt-4"}
						handlePress={onCreate}
					/>
				</View>
			</ScrollView>
			<Text>Create</Text>
		</SafeAreaView>
	);
};

export default Create;

const styles = StyleSheet.create({});
