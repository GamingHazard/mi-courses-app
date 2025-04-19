import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

import axios from "axios";
import { Configs } from "../components/Configs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsPage = ({ route, navigation }) => {
  const [userId, setUserId] = useState("");
  const { courseName, sector, coverImage, description, _id, videos, likes } =
    route.params;
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        setUserId(userId);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };
    fetchUserId();
  }, []);

  const handleSave = async (postId) => {
    try {
      const data = { courseId: postId, userId: userId };
      const response = await axios.put(`${Configs.url}/course/save`, data);

      if (response.status === 200) {
        setSaved(true);
      }
    } catch (error) {
      console.log("Error liking the post", error);
    }
  };

  const handlesUnsave = async (postId) => {
    try {
      const data = { courseId: postId, userId: userId };
      const response = await axios.put(`${Configs.url}/course/unsave`, data);
      if (response.status === 200) {
        setSaved(false);
      }
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  const enroll = async () => {
    try {
      const data = { courseId: _id };
      navigation.navigate("enrolledCourse", { urls: videos.map((v) => v.url) });
      await axios.put(`${Configs.url}/course/enroll`, data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 300,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: coverImage.url }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View className="flex-row px-4 justify-center align-middle">
          <Text className="flex-1" style={styles.courseName}>
            {courseName}
          </Text>
          <Ionicons
            style={{
              right: 10,
              color: "teal",
              flex: 1,
              textAlign: "right",
            }}
            name="bookmark-outline"
            size={30}
            color={"lightgrey"}
          />
          {likes?.includes(userId) ? (
            <Ionicons
              onPress={() => handlesUnsave(_id)}
              name="bookmark"
              size={18}
              color="teal"
            />
          ) : (
            <Ionicons
              onPress={() => handleSave(_id)}
              name="bookmark-outline"
              size={18}
              color="teal"
            />
          )}
        </View>
        <Text style={styles.sector}>{sector}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity
        onPress={enroll}
        className="flex-row text-center p-6 mx-5 bg-teal-600 justify-center align-middle"
      >
        <Text className="text-white">Get satrted</Text>
        <FontAwesome6
          style={{
            left: 10,
          }}
          name="arrow-right"
          size={25}
          color={"lightgrey"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
  },
  courseName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  sector: {
    fontSize: 16,
    color: "gray",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
});

export default DetailsPage;
