import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const FormUserDetails = (props) => {
  const { nextStep, userDetails, handleUserDetails } = props;

  const continueStep = (values) => {
    handleUserDetails(values)
    nextStep();
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
        Enter User Details
      </Text>
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={userDetails}
        onSubmit={continueStep}
      >
        {({
          setFieldTouched,
          isValid,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
        }) => {
          console.log(values);
          return (
            <View style={{ padding: 20 }}>
              <View style={styles.lableContainer}>
                <Text style={styles.label}>First Name</Text>
                {errors.firstName && touched.firstName && (
                  <Text style={styles.error}>{errors.firstName}</Text>
                )}
              </View>
                <TextInput
                  style={styles.input}
                  placeholder='Justin'
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  onBlur={handleBlur("firstName")}
                />
              <View style={styles.lableContainer}>
                <Text style={styles.label}>Last Name</Text>
                {errors.lastName && touched.lastName && (
                  <Text style={styles.error}>{errors.lastName}</Text>
                )}
              </View>
                <TextInput
                  style={styles.input}
                  placeholder='Smith'
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
              <View style={styles.lableContainer}>
                <Text style={styles.label}>Email</Text>
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>
                <TextInput
                  style={styles.input}
                  placeholder='example@email.com'
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType='email-address'
                />
              <View style={{ paddingHorizontal: 100, paddingVertical: 10 }}>
                <Button
                  disabled={!isValid}
                  title='Continue'
                  onPress={() => handleSubmit(values)}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",
    padding: 7,
    marginVertical: 12
  },
  label: {
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "right",
  },
  lableContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: -10
  },
});

export default FormUserDetails;
