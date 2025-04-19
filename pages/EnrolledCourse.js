import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import { ScrollView } from "react-native";

const EnrolledCourse = ({ route }) => {
  const { urls } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-pink-300">
      <VideoPlayer urls={urls} />
      {/* <ScrollView className="flex-1 bg-green-300 px-4"></ScrollView> */}
    </SafeAreaView>
  );
};

export default EnrolledCourse;

const styles = StyleSheet.create({});
