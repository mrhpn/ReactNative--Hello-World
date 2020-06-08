import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import BeginAgainScreen from "../screens/BeginAgainScreen";
import LoveScreen from "../screens/LoveScreen";
import GettingStartedScreen from "../screens/GettingStartedScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
  },
  BeginAgain: {
    screen: BeginAgainScreen,
  },
  Love: {
    screen: LoveScreen,
  },
  GettingStarted: {
    screen: GettingStartedScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
