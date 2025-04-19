import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileForm = ({ closeModal }) => {
  return (
    <View className="  bg-purple-500 px-2 py-2 mx-3 my-3 relative">
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}>
        Edit Profile
      </Text>
      <Ionicons
        style={{ position: "absolute", top: 10, right: 10 }}
        name="close"
        size={30}
        color={"white"}
        onPress={closeModal}
      />
      <View
        style={{ width: "100%", borderRadius: 10 }}
        className="py-1 px-3 bg-white my-4"
      >
        <TextInput placeholder="Name of user" />
      </View>
      <View
        style={{ width: "100%", borderRadius: 10 }}
        className="py-1 px-3 bg-white my-4"
      >
        <TextInput placeholder="Email of user" />
      </View>
      <View
        style={{ width: "100%", borderRadius: 10 }}
        className="py-1 px-3 bg-white my-4"
      >
        <TextInput placeholder="Contact of user" />
      </View>
      <View
        style={{ width: "100%", borderRadius: 10 }}
        className="py-1 px-3 bg-white my-4"
      >
        <TextInput placeholder="Gender of user" />
      </View>
      <View
        style={{ width: "100%", borderRadius: 10 }}
        className="py-1 px-3 bg-white my-4"
      >
        <TextInput placeholder="Date of Birth of user" />
      </View>

      <TouchableOpacity className="px-2 py-2 bg-teal-400 ">
        <Text className="text-center">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({});
