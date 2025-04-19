import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutPage = () => {
  return (
    <SafeAreaView className="flex-1  relative px-5 py-3">
      <View className="flex-row">
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          App Name:{" "}
        </Text>
        <Text style={{ color: "grey" }}>mi courses</Text>
      </View>
      <View className="flex-row">
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          Version:{" "}
        </Text>
        <Text style={{ color: "grey" }}>1.0.0</Text>
      </View>
      <View className="flex-row">
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          Platform:{" "}
        </Text>
        <Text style={{ color: "grey" }}>Android</Text>
      </View>
      <View className="flex-row">
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          Developer:{" "}
        </Text>
        <Text style={{ color: "grey" }}>JOE'Nathan .INC</Text>
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          alignSelf: "center",
        }}
      >
        © All Rights Reserved@2025
      </Text>
    </SafeAreaView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({});
