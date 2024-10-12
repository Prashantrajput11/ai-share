import {
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

const CButton = ({
	title,
	containerStyles,
	textStyles,
	handlePress,
	isLoading,
}) => {
	return (
		<TouchableOpacity
			className={`bg-secondary-200 rounded-lg min-h-[60px] w-full justify-center items-center ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}
			onPress={handlePress}
			activeOpacity={0.6}
			disabled={isLoading}
		>
			<Text className={`text-primary text-lg font-semibold ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CButton;

const styles = StyleSheet.create({});
