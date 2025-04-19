import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { isValidElement, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileForm from "../components/ProfileForm";
import ModalView from "../components/Modal";

const Profile = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView className=" flex-1 relative bg-slate-100">
      <StatusBar hidden={false} />
      <View
        style={{
          height: 280,
          borderBottomWidth: 0.5,
          borderColor: "lightgrey",
        }}
        className="px-5 py-5     bg-white"
      >
        <View
          className="flex-row px-3 py-1"
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Ionicons
            onPress={() => navigation.navigate("Settings")}
            name="settings"
            size={20}
            color={"black"}
          />
        </View>
        <View style={{ height: 200 }} className="flex-row">
          <View style={{ width: "35%", height: "100%" }} className="bg-white">
            <Image
              source={require("../assets/no-image.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              width: "65%",
              height: "100%",
              justifyContent: "space-evenly",
            }}
            className="bg-white px-2 relative"
          >
            <Text>Names of user</Text>
            <Text>kisibojonathan150@gmail.com</Text>
            <Text>Contact of user</Text>
            <Text>Gender of user</Text>
            <Text>DOB of user</Text>
            <Ionicons
              style={{ position: "absolute", bottom: 10, right: 10 }}
              name="pencil"
              size={20}
              color={"grey"}
              onPress={() => {
                setIsVisible(true);
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 bg-green-400"></ScrollView>

      <View className="absolute">
        <ModalView
          modalVisible={isVisible}
          content={
            <ProfileForm
              closeModal={() => {
                setIsVisible(false);
              }}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
