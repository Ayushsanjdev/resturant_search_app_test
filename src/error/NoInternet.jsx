import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import useResults from "../hooks/useResults";
import { useNavigation } from "@react-navigation/native";

const NoInternetPage = (props) => {
  const { primaryText, secondaryText, actionClick, actionText } = props;
  const [searchApi, error] = useResults();
  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <MaterialIcons
        name='dangerous'
        size={80}
        color='#888'
        style={styles.errorIcon}
      />
      <Text style={styles.primaryText}>{primaryText || "Oops!"}</Text>
      <Text style={styles.errorText}>
        {secondaryText || "No internet connection"}
      </Text>
      <Button
        style={{ margin: 10 }}
        onPress={actionClick || handleRedirect}
        mode='contained'
      >
        {actionText || "Home"}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
  },
  errorText: {
    fontSize: 20,
    color: "#777",
    textAlign: "center",
  },
  errorIcon: {
    alignSelf: "center",
  },
  primaryText: {
    fontSize: 40,
    color: "skyblue",
    textAlign: "center",
  },
  logo: {
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default NoInternetPage;
