import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Appbar, TextInput } from "react-native-paper";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const FormPersonalDetails = (props) => {
  const { nextStep, userDetails, prevStep, handleUserDetails } = props;

  const continueStep = (values) => {
    handleUserDetails(values);
    nextStep();
  };

  const backStep = (values) => {
    handleUserDetails(values);
    prevStep();
  };

  const stepTwoValidationSchema = Yup.object({
    occupation: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid Character")
      .max(20)
      .required("Occupation is required!"),
    city: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid city")
      .max(40)
      .required("City is required!"),
    bio: Yup.string().min(10).max(100).required(),
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
        Enter Personal Details
      </Text> */}
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Content
          titleStyle={{ textAlign: "center" }}
          title='Enter Personal Details'
        />
      </Appbar.Header>
      <Formik
        validationSchema={stepTwoValidationSchema}
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
                {/* <Text style={styles.label}>Occupation</Text> */}
                {errors.occupation && touched.occupation && (
                  <Text style={styles.error}>{errors.occupation}</Text>
                )}
              </View>
              <TextInput
                error={errors.occupation && touched.occupation}
                label='Occupation'
                style={styles.input}
                placeholder='Executive'
                onChangeText={handleChange("occupation")}
                value={values.occupation}
                onBlur={handleBlur("occupation")}
              />
              <View style={styles.lableContainer}>
                {/* <Text style={styles.label}>Enter your city</Text> */}
                {errors.city && touched.city && (
                  <Text style={styles.error}>{errors.city}</Text>
                )}
              </View>
              <TextInput
                error={errors.city && touched.city}
                label='City'
                style={styles.input}
                placeholder='Mumbai'
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                value={values.city}
              />
              <View style={styles.lableContainer}>
                {/* <Text style={styles.label}>Enter your bio</Text> */}
                {errors.bio && touched.bio && (
                  <Text style={styles.error}>{errors.bio}</Text>
                )}
              </View>
              <TextInput
                error={errors.bio && touched.bio}
                style={styles.input}
                placeholder='Enter your Bio'
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                value={values.bio}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <Button mode="outlined" icon="chevron-left-circle-outline" onPress={() => backStep(values)}>Back</Button>
                <Button
                  disabled={!isValid}
                  mode="contained"
                  contentStyle={{flexDirection: 'row-reverse'}}
                  icon="chevron-right-circle-outline"
                  onPress={() => handleSubmit(values)}
                >Continue</Button>
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
    // justifyContent: "space-between",
    // flexDirection: "row",
    marginBottom: -10,
  },
});

export default FormPersonalDetails;
