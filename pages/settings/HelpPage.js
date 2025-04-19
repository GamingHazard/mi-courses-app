import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const HelpPage = () => {
  return (
    <SafeAreaView className="flex-1  px-6 py-5">
      <View
        style={{ elevation: 10 }}
        className="flex-row px-3 my-3 bg-white rounded-md "
      >
        <TextInput autoFocus placeholder="enter your email" />
      </View>
      <View
        style={{ elevation: 10 }}
        className="flex-row px-3 my-3 bg-white rounded-md "
      >
        <TextInput placeholder="subject" />
      </View>
      <View
        style={{ elevation: 10 }}
        className="flex-row px-3 my-3 bg-white rounded-md "
      >
        <TextInput multiline placeholder="Enter message" />
      </View>
      <TouchableOpacity className="flex-row text-center rounded-md bg-teal-500 my-5 p-4 align-middle justify-center">
        <Text>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HelpPage;

const styles = StyleSheet.create({});
