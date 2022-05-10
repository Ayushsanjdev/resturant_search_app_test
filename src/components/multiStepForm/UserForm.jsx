import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfirmForm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  lastName: "",
  bio: "",
};

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState(initialState);

  // proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // proceed to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // handle fields change

  const handleUserDetails = (values) => {
    setUserDetails({
      ...values,
    });
  };

  const handleResetForm = () => {
    setUserDetails({ ...initialState });
    setStep(1);
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleUserDetails={handleUserDetails}
          userDetails={userDetails}
        />
      );
      break;
    case 2:
      return (
        <FormPersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleUserDetails={handleUserDetails}
          userDetails={userDetails}
        />
      );
      break;
    case 3:
      return (
        <ConfirmForm
          prevStep={prevStep}
          nextStep={nextStep}
          handleUserDetails={handleUserDetails}
          userDetails={userDetails}
        />
      );
      break;
    case 4:
      return <Success handleResetForm={handleResetForm} />;
      break;
    default:
      break;
  }
};
const styles = StyleSheet.create({});

export default UserForm;
