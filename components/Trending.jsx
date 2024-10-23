import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Trending = ({ list }) => {
	return (
		<FlatList
			data={list}
			renderItem={({ item }) => {
				return (
					<View>
						<Text className="text-white text-xl">{item.id}</Text>
					</View>
				);
			}}
			horizontal
		/>
	);
};

export default Trending;

const styles = StyleSheet.create({});
