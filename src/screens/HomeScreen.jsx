import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 18, padding: 10 }}>
        Navigate to Demo screens{" "}
      </Text>
      <Button onPress={() => navigation.navigate("Form")}>Forms</Button>
      <Button onPress={() => navigation.navigate("Search")}>Explore</Button>
      <Button onPress={() => navigation.navigate("NetInfo")}>Net Info</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
