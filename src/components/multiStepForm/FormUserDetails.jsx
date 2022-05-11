import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const FormUserDetails = (props) => {
  const { nextStep, userDetails, handleUserDetails } = props;

  const continueStep = (values) => {
    handleUserDetails(values);
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
      {/* <Text
        style={{
          backgroundColor: "skyblue",
          textAlign: "center",
          padding: 15,
          fontSize: 20,
        }}
      >
        Enter User Details
      </Text> */}
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Content
          titleStyle={{ textAlign: "center" }}
          title='Enter User Details'
        />
      </Appbar.Header>
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
                {/* <Text style={styles.label}>First Name</Text> */}
                {errors.firstName && touched.firstName && (
                  <Text style={styles.error}>{errors.firstName}</Text>
                )}
              </View>
              <TextInput
                error={errors.firstName && touched.firstName}
                label='First Name'
                style={styles.input}
                placeholder='Justin'
                onChangeText={handleChange("firstName")}
                value={values.firstName}
                onBlur={() => setFieldTouched("firstName")}
              />
              <View style={styles.lableContainer}>
                {/* <Text style={styles.label}>Last Name</Text> */}
                {errors.lastName && touched.lastName && (
                  <Text style={styles.error}>{errors.lastName}</Text>
                )}
              </View>
              <TextInput
                label='Last Name'
                error={errors.lastName && touched.lastName}
                style={styles.input}
                placeholder='Smith'
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
                value={values.lastName}
              />
              <View style={styles.lableContainer}>
                {/* <Text style={styles.label}>Email</Text> */}
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>
              <TextInput
                label='Email'
                left={<TextInput.Icon name='email' />}
                error={errors.email && touched.email}
                style={styles.input}
                placeholder='example@email.com'
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                value={values.email}
                keyboardType='email-address'
              />
              <View style={{ paddingVertical: 10 }}>
                <Button
                  icon='chevron-right-circle-outline'
                  mode='contained'
                  style={{ width: 200, alignSelf: 'center'}}
                  contentStyle={{ flexDirection: "row-reverse" }}
                  disabled={!isValid}
                  onPress={() => handleSubmit(values)}
                >
                  Continue
                </Button>
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
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: "#aaa",
    // padding: 7,
    marginVertical: 12,
  },
  label: {
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "right",
  },
  lableContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: -10,
  },
});

export default FormUserDetails;
