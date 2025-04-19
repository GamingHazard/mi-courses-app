import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import EnrolledCourses from "../pages/courses/EnrolledCourses";
import FinishedCourses from "../pages/courses/FinishedCorses";

const CourseScreen = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <SafeAreaView className=" flex-1 relative">
      <StatusBar hidden={false} />
      {/* Buttons */}
      <View styles={styles.btnContainer} className="flex-row   ">
        <View className="flex-row flex-1 ">
          <TouchableOpacity
            onPress={() => handleTabClick(1)}
            // className=" "
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              borderWidth: activeTab === 1 ? 0.5 : 0,
              backgroundColor: activeTab === 1 ? "#6200ee" : "white",
            }}
          >
            <Text
              style={{
                fontWeight: activeTab === 1 ? "bold" : "none",
                color: activeTab === 1 ? "white" : "black",
                fontSize: activeTab === 1 ? 18 : 12,
              }}
            >
              Enrolled
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabClick(2)}
            // className="bg-purple-400"
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              borderWidth: activeTab === 2 ? 0.5 : 0,
              backgroundColor: activeTab === 2 ? "#6200ee" : "white",
            }}
          >
            <Text
              style={{
                fontWeight: activeTab === 2 ? "bold" : "none",
                color: activeTab === 2 ? "white" : "black",
                fontSize: activeTab === 2 ? 18 : 12,
              }}
            >
              Finished
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 bg-blue-300 px-2 py-2">
        {activeTab === 1 && (
          <View className="bg-pink-300 flex-1">
            <EnrolledCourses />
          </View>
        )}
        {activeTab === 2 && (
          <View className="bg-teal-300 flex-1">
            <FinishedCourses />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  btnContainer: { height: 50 },
  btn1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRightWidth: {},
  },
  btn1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
