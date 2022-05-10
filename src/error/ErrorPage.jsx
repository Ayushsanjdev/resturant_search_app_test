import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import yelpImage from "../../assets/yelp.png";
import { MaterialIcons } from "@expo/vector-icons";

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Image source={yelpImage} style={styles.logo} />
      <MaterialIcons
        name='dangerous'
        size={80}
        color='#888'
        style={styles.errorIcon}
      />
      <Text style={styles.primaryText}>Ooops!</Text>
      <Text style={styles.errorText}>SOMETHING WENT WRONG!</Text>
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
    textAlign: 'center'
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
    alignSelf: 'center'
  },
});

export default ErrorPage;
