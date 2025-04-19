import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const DiscoverNews = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <View className="bg-orange-400 flex-1">
      <ScrollView
        style={{ maxHeight: 50, maxWidth: "100%" }}
        horizontal
        className="flex-row"
        persistentScrollbar={false}
      >
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 1 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(1)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 1 ? "white" : "black" }}>
            International
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 2 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(2)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 2 ? "white" : "black" }}>
            Local
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 3 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(3)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 3 ? "white" : "black" }}>
            Education
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 4 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(4)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 4 ? "white" : "black" }}>
            Science
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 5 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(5)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 5 ? "white" : "black" }}>
            Technology
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 6 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(6)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 6 ? "white" : "black" }}>
            Politics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 7 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(7)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 7 ? "white" : "black" }}>
            Entertainment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: activeTab === 8 ? "#6200ee" : "white",
          }}
          onPress={() => handleTabClick(8)}
          className="px-3 py-2 m-2 bg-white"
        >
          <Text style={{ color: activeTab === 8 ? "white" : "black" }}>
            Lifestyle
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DiscoverNews;

const styles = StyleSheet.create({});
