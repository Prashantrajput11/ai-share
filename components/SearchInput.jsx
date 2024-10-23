import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const SearchInput = ({
	title,
	value,
	otherStyles,
	handleChangeText,
	onPress,
	...props
}) => {
	return (
		<View className={`space-y-2  ${otherStyles} `}>
			<Text className="text-white text-base font-pbold mt-4">{title}</Text>

			<View className=" border-2  border-black-200 bg-black-200 h-14 rounded-xl px-4 focus:border-secondary-100 flex-row items-center">
				<TextInput
					className="flex-1 text-white font-psemibold"
					value={value}
					onChangeText={handleChangeText}
					placeholder="Search for a video topic"
					placeholderTextColor={"#7b7b8b"}
				/>

				<TouchableOpacity onPress={onPress}>
					<Image source={icons.search} className="h-6 w-6" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SearchInput;
