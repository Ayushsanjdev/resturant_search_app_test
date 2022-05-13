import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder='Username'
        style={styles.input}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        style={styles.input}
        secureTextEntry={true}
      />
      <Button
        color='black'
        onPress={() => {
          console.warn("signing in..");
        }}
        title='Sign In'
      />
      <Text style={styles.register}>Forgot Password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
  },
  image: {
    height: 100,
    width: 250,
    alignSelf: "center",
    resizeMode: "contain",
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  register: {
    marginTop: 15,
  },
});

export default LoginScreen;
