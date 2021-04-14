import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupLogininScreen from "./screens/SignupLogininScreen";

export default function App() {
  return (<AppContainer />);
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
  },
});

const AppContainer = createAppContainer(TabNavigator);
