import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultShowScreen";
import UserForm from "../components/multiStepForm/UserForm";
import NetInfo from "../error/OfflinePage";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'home screen' }}
      />
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
      <Stack.Screen
        name='NetInfo'
        component={NetInfo}
        options={{ headerTitle: "NetInfo" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
