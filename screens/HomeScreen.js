import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider"; // Expects each image item to have {id, uri}
import axios from "axios";
import { Configs } from "../components/Configs";

const HomeScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = async ({ course }) => {
    navigation.navigate("details", course);
    console.log("pressing image");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      loadCourses();
    }, 2000);

    return () => clearTimeout(timer); // Clean up
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    setError(null); // Reset the error
    try {
      const res = await axios.get(`${Configs.url}/courses`);
      if (Array.isArray(res.data.courses)) {
        setCourses(res.data.courses);
      } else {
        console.error(
          "Expected courses to be an array but got:",
          res.data.courses
        );
        setError("Courses not available.");
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Group courses by their sector
  const getUniqueSectors = (courses) => {
    // Create a set of all sectors
    return Array.from(new Set(courses.map((course) => course.sector)));
  };

  const uniqueSectors = getUniqueSectors(courses);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />

      {/* Navigation Bar */}
      <View className="#0c5692" style={styles.nav}>
        <Text className="text-white" style={styles.title}>
          SKILLS AT YOUR FINGERTIPS
        </Text>
        <Ionicons name="mail-outline" size={30} color="white" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Trending Courses Section */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            paddingVertical: 10,
            marginLeft: 10,
            display: courses.length <= 0 ? "none" : "block",
          }}
        >
          Trending Courses 🔥
        </Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {courses.map((course, index) => {
            // For trending courses, transform coverImage.url into the expected object format
            const images = course.coverImage?.url
              ? [{ id: `trending-${index}`, uri: course.coverImage.url }]
              : [];
            return (
              <View key={index} style={styles.trendingCourse}>
                <ImageSlider
                  direction={false}
                  images={images}
                  courseName={course.courseName}
                  gotToDetails={() => navigation.navigate("details", course)}
                />
              </View>
            );
          })}
        </ScrollView>

        {/* Courses Grouped by Sector */}
        {uniqueSectors.map((sector, sectorIndex) => {
          // Filter the courses that belong to the current sector
          const coursesBySector = courses.filter(
            (course) => course.sector === sector
          );
          return (
            <View key={sectorIndex} style={styles.sectorSection}>
              <Text style={styles.sectorHeader}>{sector}</Text>
              <ScrollView
                horizontal
                style={{ height: 160, paddingRight: 30 }}
                className=" flex-row px-5   py-3"
              >
                {coursesBySector.map((course, index) => {
                  const images = course.coverImage?.url
                    ? [
                        {
                          id: `sector-${sectorIndex}-${index}`,
                          uri: course.coverImage.url,
                        },
                      ]
                    : [];
                  return (
                    <View
                      key={index}
                      style={{ borderRadius: 20, display: "flex" }}
                    >
                      <ImageSlider
                        direction={false}
                        images={images}
                        courseName={course.courseName}
                        imgStyl={styles.img}
                        gotToDetails={() =>
                          navigation.navigate("details", course)
                        }
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}

        {loading && (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="grey" />
            <Text>Loading courses...</Text>
          </View>
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        {!loading && courses.length === 0 && !error && (
          <Text style={styles.noCourses}>No courses available.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  courseCard: {
    borderRadius: 15,
    padding: 0,
    margin: 8,
  },

  nav: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#0c5692",
    elevation: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    padding: 15,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  trendingCourse: {
    marginRight: 10,
  },
  sectorSection: {
    // backgroundColor: "lightgreen",
    margin: 10,
  },
  sectorHeader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
    marginLeft: 10,
  },

  courseInfo: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  infoText: {
    marginBottom: 5,
    fontSize: 14,
  },
  label: {
    fontWeight: "bold",
  },
  descriptionHeader: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  noCourses: {
    textAlign: "center",
    marginTop: 20,
  },
});
