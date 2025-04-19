import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const SettingsPage = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 ">
      {/* Account */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Account")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <Ionicons
          style={{ right: 10, color: "grey" }}
          name="person-outline"
          size={20}
          color={"lightgrey "}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          Account
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>

      {/* Security */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Security")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <Ionicons
          style={{ right: 10, color: "grey" }}
          name="shield-outline"
          size={20}
          color={"lightgrey"}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          Security
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>
      {/* App Settings */}
      <TouchableOpacity
        onPress={() => navigation.navigate("App settings")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <Ionicons
          style={{ right: 10, color: "grey" }}
          name="settings-outline"
          size={20}
          color={"lightgrey"}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          App Settings
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>
      {/* FAQs */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Frequently Asked Questions")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <FontAwesome6
          style={{ right: 10, color: "grey" }}
          name="question-circle"
          size={20}
          color={"lightgrey"}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          FAQ's
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>
      {/* Help */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Help")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <FontAwesome6
          style={{ right: 10, color: "grey" }}
          name="headphones"
          size={20}
          color={"lightgrey"}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          Help
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>
      {/* About app */}
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={{ justifyContent: "center", elevation: 10, borderRadius: 10 }}
        className="flex-row px-6 py-4  my-4 bg-white mx-4 "
      >
        <FontAwesome5
          style={{ right: 10, color: "grey" }}
          name="exclamation-circle"
          size={20}
          color={"lightgrey"}
        />
        <Text style={{ color: "grey" }} className="flex-1">
          About App
        </Text>
        <FontAwesome5 name="arrow-right" size={20} color={"lightgrey"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({});
