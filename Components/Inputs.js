import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
//import punycode from "punycode/";  //for improving performance while running
// (props(can be any name)) => this is arrow function.
const InfoInput = (props) => {
  const [enteredInfo, setEnteredInfo] = useState("");

  const InfoInputHandler = (enteredText) => {
    setEnteredInfo(enteredText);
  };

  return(
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={InfoInputHandler}
          value={enteredInfo}
        />
    </View>
  );// End of return function.
} // End of InfoInput function.

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "80%",
      paddingHorizontal: 10,
      borderColor: "black",
      borderWidth: 2,
      marginBottom: 10,
    },
    ButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "60%",
      //padding: 10,
      //borderColor: 'black',
      //marginBottom: 10,
    },
  });
  
  export default InfoInput;

