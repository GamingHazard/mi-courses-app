import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const EnrolledCourse = ({ route, navigation }) => {
  const { urls } = route.params;

  return (
    <SafeAreaView className="flex-1 p-2">
      <VideoPlayer urls={urls} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className=" flex-row justify-center align-middle p-2 rounded-md m-4"
        style={{ backgroundColor: "#0c5692" }}
      >
        <Text className="text-white">Back</Text>
      </TouchableOpacity>
      <Ionicons
        onPress={() => {
          navigation.navigate("/");
        }}
        style={{}}
        className="absolute right-5 top-96"
        name="home"
        size={30}
        color={"#0c5692"}
      />
    </SafeAreaView>
  );
};

export default EnrolledCourse;

const styles = StyleSheet.create({});
