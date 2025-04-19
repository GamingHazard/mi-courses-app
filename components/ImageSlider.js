import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pic from "../assets/no-image.jpg";
const { width } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";

const ImageSlider = ({
  courseName,
  images,
  direction,
  imgStyl,
  gotToDetails,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal={direction}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              gotToDetails(item);
            }}
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: item.uri } || require("../assets/no-image.jpg")}
              style={[styles.image, imgStyl]}
            />

            <LinearGradient
              colors={["transparent", "rgba(0,0,0,1)"]}
              style={styles.gradient}
            >
              <Text style={styles.imageText}>{courseName}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    display: "flex",
  },
  imageContainer: {
    position: "relative",
    marginRight: 10,
    backgroundColor: "whitesmoke",
    position: "relative",
  },
  image: {
    width: 300,
    height: 160,
    borderRadius: 10,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ImageSlider;
