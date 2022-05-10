import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const ConfirmForm = (props) => {
  const { nextStep, prevStep, userDetails, handleUserDetails } = props;

  const continueStep = (values) => {
    nextStep();
    handleUserDetails(values);
  };

  const backStep = () => {
    prevStep();
  };

  const stepOneValidationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid first name")
      .max(40)
      .required("First Name is required!"),
    lastName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid last name")
      .max(40)
      .required("Last Name is required!"),
    email: Yup.string()
      .email()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email"
      )
      .required("Email is required!"),
  });

  return (
    <View>
      <Text
        style={{
          backgroundColor: "skyblue",
          textAlign: "center",
          padding: 15,
          fontSize: 20,
        }}
      >
        Confirm Your Details
      </Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.labelValue}>
          {userDetails.firstName + " " + userDetails.lastName}
        </Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.labelValue}>{userDetails.email}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Occupation</Text>
        <Text style={styles.labelValue}>{userDetails.occupation}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>City</Text>
        <Text style={styles.labelValue}>{userDetails.city}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.labelValue}>{userDetails.bio}</Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button title='Back' onPress={backStep} />
        <Button title='Confirm & Submit' onPress={continueStep} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
  },
  labelValue: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#666",
  },
  labelContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default ConfirmForm;
