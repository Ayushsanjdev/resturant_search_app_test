import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { Appbar, List, Button } from "react-native-paper";
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
      {/* <Text
        style={{
          backgroundColor: "skyblue",
          textAlign: "center",
          padding: 15,
          fontSize: 20,
        }}
      >
        Confirm Your Details
      </Text> */}
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Content
          titleStyle={{ textAlign: "center" }}
          title='Confirm Details'
        />
      </Appbar.Header>
      <List.Section style={{ width: 360, alignSelf: 'center',  }}>
        <List.Item
          title={userDetails.firstName + " " + userDetails.lastName}
          left={() => <List.Icon icon='account-box-outline' />}
        />
        <List.Item
          title={userDetails.email}
          left={() => <List.Icon icon='email' />}
        />
        <List.Item
          title={userDetails.occupation}
          left={() => <List.Icon icon='briefcase-outline' />}
        />
        <List.Item
          title={userDetails.city}
          left={() => <List.Icon icon='city-variant-outline' />}
        />
        <List.Item
          title="About Me: "
          description={userDetails.bio}
          titleStyle={{}}
          left={() => <List.Icon icon='account-details' />}
        />
      </List.Section>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          icon='chevron-left-circle-outline'
          title='Back'
          onPress={backStep}
          mode="outlined"
        >
          Back
        </Button>
        <Button
          mode="contained"
          icon='chevron-right-circle-outline'
          contentStyle={{ flexDirection: "row-reverse" }}
          title='Confirm & Submit'
          onPress={continueStep}
        >
          Confirm & Submit
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
});

export default ConfirmForm;
