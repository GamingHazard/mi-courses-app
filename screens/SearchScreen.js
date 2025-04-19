import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchScreen = () => {
  return (
    <SafeAreaView className="bg-white-700 flex-1 relative">
      <StatusBar hidden={false} />

      {/* Search Bar */}
      <View className="flex-row  px-10" style={styles.searchContainer}>
        <View className="px-5 bg-white" style={styles.bar}>
          <TextInput autoFocus placeholder="Search..." />
        </View>
        <TouchableOpacity className="bg-white px-3" style={styles.btn}>
          <Ionicons name="search" size={20} color={"grey"} />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 bg-blue-400 px-6"></ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: { height: 50 },
  bar: { borderWidth: 0.5, flex: 1, margin: 5, borderRadius: 20 },
  btn: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0.5,
    margin: 5,
  },
});
