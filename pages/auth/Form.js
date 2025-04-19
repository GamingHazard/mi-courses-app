import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Configs } from "../../components/Configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/AuthContext";

const Form = ({ route }) => {
  const { id, verified } = route.params;
  const { register } = useContext(AuthContext); // Use the register function from AuthContext
  // Register state
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  // Use JavaScript Date object for dob.
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to format date to YYYY-MM-DD
  const formatDate = (date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  // Submission function for the registration form
  const handleRegisterSubmit = async () => {
    try {
      const payload = {
        firstName: firstName,
        secondName: secondName,
        contact: contact,
        gender: gender,
        dob: formatDate(dob), // Format the date before sending
        id: id,
      };
      console.log(payload);

      const response = await axios.patch(
        `${Configs.url}/register-user`,
        payload
      );
      const userData = response.data.user;
      register(userData, verified, id); // Call the register function from AuthContext
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  // Function to handle date picker change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios"); // on Android, dismiss after selection
    setDob(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* register form */}
      <View style={styles.form}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Second Name"
          value={secondName}
          onChangeText={setSecondName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.datePickerButton}
        >
          <Text style={styles.datePickerText}>
            Date of Birth: {formatDate(dob)}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dob}
            mode="date"
            display="default"
            onChange={onChangeDate}
            maximumDate={new Date()}
          />
        )}

        <Button title="Register" onPress={handleRegisterSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeToggle: {
    backgroundColor: "#007AFF",
  },
  toggleText: {
    color: "#fff",
    fontSize: 16,
  },
  form: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  datePickerButton: {
    height: 40,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePickerText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Form;
