import { View, Text, ScrollView, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CButton from "../../components/CButton";
import { Link } from "expo-router";

const SignUp = () => {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
	});

	const validateInputs = () => {
		if (form.email === "" || form.password === "") {
			Alert.alert("Invalid", "Please dont leave any field empty");
			return false;
		} else {
			return true;
		}

		//
	};

	const onSubmit = () => {
		if (validateInputs) {
			Alert.alert("Success", "Enjoy the app ");
		} else {
			Alert.alert("can not login", "sorry ");
		}
	};
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className=" w-full justify-center min-h-[83vh]">
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115px] h-[35px]"
					/>
					<Text className="text-white text-2xl mt-6 font-psemibold">
						Sign Up
					</Text>

					<FormField
						title="Username"
						value={form.username}
						handleChangeText={(text) => setForm({ ...form, username: text })}
						otherStyles={"mt-7"}
						// keyboardType="email-address"
					/>

					<FormField
						title="Email"
						value={form.email}
						handleChangeText={(text) => setForm({ ...form, email: text })}
						otherStyles={"mt-7"}
						keyboardType="email-address"
					/>
					<FormField
						title="Password"
						value={form.password}
						handleChangeText={(text) => setForm({ ...form, password: text })}
						otherStyles={"mt-7"}
					/>

					<CButton
						title="Create Account"
						containerStyles={"mt-10"}
						handlePress={onSubmit}
					/>

					<View className=" flex-row gap-2 mt-2  justify-center">
						<Text className="text-white text-base">
							Already have an account ?
						</Text>
						<Link className="text-secondary-200 text-base" href={"/sign-in"}>
							Signin
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
