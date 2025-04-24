import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Video } from "expo-av";

const VideoPlayer = ({ urls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % urls.length;
    setCurrentIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % urls.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + urls.length) % urls.length;
    setCurrentIndex(prevIndex);
  };

  const handleTabPress = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: urls[currentIndex] }}
          useNativeControls
          resizeMode="cover"
          shouldPlay
          isLooping={false}
          onLoadStart={() => {
            setIsLoading(true);
          }}
          onLoad={() => {
            setIsLoading(false);
          }}
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded) {
              setIsBuffering(status.isBuffering);
              if (status.didJustFinish) {
                handleVideoEnd();
              }
            }
          }}
          style={styles.video}
        />
        {(isLoading || isBuffering) && (
          <ActivityIndicator
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            size="large"
            color="#fff"
          />
        )}
      </View>

      {/* Tabs for selecting other videos */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
      >
        {urls.map((url, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, currentIndex === index && styles.activeTab]}
            onPress={() => handleTabPress(index)}
            className="m-2"
          >
            <Text
              style={[
                styles.tabText,
                currentIndex === index && styles.activeTabText,
              ]}
            >
              Part {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "lightgreen",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: 300,
    marginBottom: 10,
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tabsContainer: {
    flexGrow: 0,
    paddingVertical: 10,
    // backgroundColor: "lightpink",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    width: "45%",
  },
  activeTab: {
    backgroundColor: "#555",
  },
  tabText: {
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
  },
});

export default VideoPlayer;
