import React from "react";
import {
  Image,
  Text,
  ImageBackground,
  ImageComponent,
  StyleSheet,
  View,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function WelcomeScreen({ navigation }) {
  const handleOnBeginAgainPress = () => {
    navigation.navigate("BeginAgain");
  };

  const handleOnLoveForeverPress = () => {
    navigation.navigate("Love");
  };

  const handleOnGettingStartedPress = () => {
    navigation.navigate("GettingStarted");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/welcomeLogo.png")}
      />
      <Text style={styles.headingOne}>Bird's Nest</Text>
      <Text style={styles.paragraph}>
        My first React Native Application to World
      </Text>
      <TouchableNativeFeedback onPress={handleOnGettingStartedPress}>
        <View style={styles.getStarted}>
          <Text style={styles.getStartedText}>Get Started </Text>
          <AntDesign name="rocket1" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.buttonWrapper}>
        <TouchableNativeFeedback onPress={handleOnBeginAgainPress}>
          <View style={styles.beginAgain}>
            <Text style={styles.beginAgainText}>Begin Again </Text>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="white"
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={handleOnLoveForeverPress}>
          <View style={styles.loveForever}>
            <Text style={styles.loveForeverText}>Love Forever </Text>
            <MaterialCommunityIcons name="heart" size={24} color="white" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 300,
    height: 300,
  },
  getStarted: {
    marginTop: 10,
    marginHorizontal: 5,
    top: 20,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: colors.thirdary,
    flexDirection: "row",
    marginTop: 50,
  },
  beginAgain: {
    marginTop: 10,
    marginHorizontal: 5,
    top: 20,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    flexDirection: "row",
  },
  loveForever: {
    marginTop: 10,
    marginHorizontal: 5,
    top: 20,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
  },
  getStartedText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
  },
  beginAgainText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
  },
  loveForeverText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
  },
  headingOne: {
    fontSize: 30,
    top: 15,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  paragraph: {
    fontWeight: "normal",
    marginTop: 20,
    color: colors.gray,
  },
});

export default WelcomeScreen;
