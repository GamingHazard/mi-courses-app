import React, { useState } from "react";
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
import { Configs } from "../../components/Configs";

const AuthForm = ({ navigation }) => {
  // Toggle between login and register view
  const [isLogin, setIsLogin] = useState(true);
  const [verify, setVerify] = useState(false);

  // Login state
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const getCode = async () => {
    try {
      const response = await axios.post(`${Configs.url}/user-email`, {
        email,
      });
      console.log("Login response:", response.data);
      if (response.status === 200) {
        setVerify(true);
      }

      // Further processing like navigation or token storage goes here.
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const verifyCode = async () => {
    try {
      console.log(code);

      const response = await axios.patch(`${Configs.url}/verify-user-email`, {
        code,
      });
      console.log("verification response:", response.data);
      const id = response.data.userId;
      const verified = response.data.verified;
      if (id && verified === true && !response.data.user._id) {
        navigation.navigate("form", { id, verified });
      }

      // Further processing like navigation or token storage goes here.
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => setIsLogin(true)}
          style={[styles.toggleButton, isLogin && styles.activeToggle]}
        >
          <Text style={styles.toggleText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsLogin(false)}
          style={[styles.toggleButton, !isLogin && styles.activeToggle]}
        >
          <Text style={styles.toggleText}>Register</Text>
        </TouchableOpacity>
      </View>

      {isLogin ? (
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button title="Submit" onPress={getCode} />
        </View>
      ) : (
        <View>
          {verify ? (
            <View>
              {/* email form */}

              <TextInput
                style={styles.input}
                placeholder="Verification code "
                value={code}
                onChangeText={setCode}
                keyboardType="number"
                autoCapitalize="none"
              />
              <Button title="Verify code" onPress={verifyCode} />
            </View>
          ) : (
            <View>
              {/* email form */}

              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Button title="Submit" onPress={getCode} />
            </View>
          )}
        </View>
      )}
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

export default AuthForm;
