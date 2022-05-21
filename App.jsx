import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import theme from "./src/theme/theme";
import NetworkDetector from "./src/hoc/NetworkDetector";

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <NetworkDetector> */}
          <StackNavigator />
        {/* </NetworkDetector> */}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
