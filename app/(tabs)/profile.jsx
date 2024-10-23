import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@/providers/AuthProvider";

const Profile = () => {
	// const { profile } = useAuth();

	// if (!profile) return;

	return <View>{/* <Text>Profile {profile?.username}</Text> */}</View>;
};

export default Profile;

const styles = StyleSheet.create({});
