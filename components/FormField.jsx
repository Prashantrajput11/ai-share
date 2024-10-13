import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({
	title,
	value,
	otherStyles,
	handleChangeText,
	...props
}) => {
	return (
		<View className={`space-y-2  ${otherStyles}`}>
			<Text className="text-white text-base font-pbold mt-4">{title}</Text>

			<View className=" border-2  border-black-200 bg-black-200 h-14 rounded-md px-4 focus:border-secondary-100">
				<TextInput
					className="flex-1 text-white font-psemibold"
					value={value}
					onChangeText={handleChangeText}
				/>
			</View>
		</View>
	);
};

export default FormField;
