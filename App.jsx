import React from "react";
import PaperProvider from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    // <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
}
