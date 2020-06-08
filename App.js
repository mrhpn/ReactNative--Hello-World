import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Button,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BeginAgainScreen from "./app/screens/BeginAgainScreen";
import LoveScreen from "./app/screens/LoveScreen";

import Navigator from "./app/routes/homeStack";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
