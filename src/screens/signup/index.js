import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import backgroundImage from "../../../assets/background-signup.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAwareScrollView className="bg-black rounded-t-3xl">
      <View>
        <Image source={backgroundImage} className="object-cover h-80 w-full" />
      </View>
      <View className="bg-white h-screen rounded-t-3xl">
        <Text className="text-[#222] text-3xl font-semibold text-center py-3 mt-3">
          Sign Up
        </Text>
        <View className="items-center">
          <TextInput
            className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
            placeholder="Password"
            value={password}
            textContentType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
            placeholder="Confirm password"
            value={confirmPassword}
            textContentType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <TouchableOpacity className="py-3 bg-[#222] rounded items-center my-5 mx-20">
          <Text className="text-lg text-white">Register</Text>
        </TouchableOpacity>
        <View className="flex-row space-x-2 justify-end mr-10 mt-5">
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text className="underline">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
