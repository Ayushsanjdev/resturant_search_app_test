import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultShowScreen";
import UserForm from "../components/multiStepForm/UserForm";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Form'>
      <Stack.Screen
        name='Search'
        component={SearchScreen}
        options={{ headerTitle: "Search" }}
      />
      <Stack.Screen
        name='ResultShow'
        component={ResultShowScreen}
        options={{ headerTitle: "About" }}
      />
      <Stack.Screen
        name='Form'
        component={UserForm}
        options={{ headerTitle: "Forms" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
