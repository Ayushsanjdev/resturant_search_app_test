import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Yelp Test App",
    },
  }
);

export default createAppContainer(navigator);
