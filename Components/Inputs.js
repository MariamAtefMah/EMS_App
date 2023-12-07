import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
//import punycode from "punycode/";  //for improving performance while running
// (props(can be any name)) => this is arrow function.
const Inputs = (props) => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const IDInputHandler = (enteredText1) => {
    setEnteredID(enteredText1);
  };

  const PasswordInputHandler = (enteredText2) => {
    setEnteredPassword(enteredText2);
  };

  const handleButtonPress = () => {
    // Handle logic when the button is pressed
    console.log("Entered ID:", enteredID);
    console.log("Entered Password:", enteredPassword);
  };

  return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your ID"
          style={styles.input}
          onChangeText={IDInputHandler}
          value={enteredID}
        />
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          onChangeText={PasswordInputHandler}
          value={enteredPassword}
        />
        <View style={styles.ButtonContainer}>
        <Button title="Sign in" color='#32926F' onPress={handleButtonPress} />
        </View>
      </View>
  ); // End of return function.
}; // End of InfoInput function.

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 100,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  ButtonContainer: {
    //flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    paddingTop: 20,
    //padding: 10,
    borderColor: 'black',
    //marginBottom: 10,
  },
});
export default Inputs;
