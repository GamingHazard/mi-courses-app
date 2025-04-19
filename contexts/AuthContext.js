import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [verified, setVerified] = useState(null);

  useEffect(() => {
    const getVerified = async () => {
      try {
        const storedValue = await AsyncStorage.getItem("verified");
        if (storedValue !== null) {
          setVerified(JSON.parse(storedValue)); // Convert string to boolean
        }
      } catch (error) {
        console.error("Error reading verified from storage", error);
      }
    };

    getVerified();
  }, []);
  const login = (userData) => {
    setUser(userData); // Set the user data after login
  };
  const register = (userData, verified, id) => {
    setVerified(verified); // Set the verified status
    setUser(userData);
    AsyncStorage.setItem("userId", JSON.stringify(id)); // Store user ID in AsyncStorage
    AsyncStorage.setItem("verified", JSON.stringify(verified)); // Store verified status in AsyncStorage
    AsyncStorage.setItem("userData", JSON.stringify(userData)); // Store user data in AsyncStorage
  };

  const logout = () => {
    setUser(null); // Clear the user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, verified }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
