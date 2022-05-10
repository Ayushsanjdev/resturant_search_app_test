import React from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Success = ({ handleResetForm }) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Ionicons
          style={{ alignSelf: "center" }}
          name='checkmark-done-circle'
          size={50}
          color='green'
        />
        <Text style={{ fontSize: 20, marginBottom: 30, textAlign: "center" }}>
          Submitted Successfully!
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          Thank you for your submission.
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
          {" "}
          You will get an email with further instructions!
        </Text>
        <Button
          onPress={() => {
            handleResetForm();
            navigation.navigate("Form");
          }}
          title='Start Again'
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default Success;
