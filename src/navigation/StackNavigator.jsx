import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultShowScreen";
import UserForm from "../components/multiStepForm/UserForm";
import OfflinePage from "../error/OfflinePage";
import HomeScreen from "../screens/HomeScreen";
import NoInternetPage from "../error/NoInternet";
import NetInfo from "@react-native-community/netinfo";
import NetworkDetector from "../hoc/NetworkDetector";

const Stack = createStackNavigator();

const StackNavigator = () => {
  
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerTitle: "home screen" }}
      />
      <Stack.Screen
        name='Search'
        component={NetworkDetector(SearchScreen)}
        options={{ headerTitle: "Search" }}
      />
      <Stack.Screen
        name='ResultShow'
        component={NetworkDetector(ResultShowScreen)}
        options={{ headerTitle: "About" }}
      />
      <Stack.Screen
        name='Form'
        component={UserForm}
        options={{ headerTitle: "Forms" }}
      />
      <Stack.Screen
        name='NetInfo'
        component={OfflinePage}
        options={{ headerTitle: "NetInfo" }}
      />
      {/* <Stack.Screen name='NoInternet' options={{ headerTitleContainerStyle: {display: "none"} }} component={NoInternetPage} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
