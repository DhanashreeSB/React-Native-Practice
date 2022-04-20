import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show Alert
      //Alert provided by react-native is not a component. But it's an object that holds a method that we call.
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <InstructionText>Guess my number</InstructionText>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        {/* To control the type of keyboard which pops up when user clicks on input field, there is a prop called keyboardType */}
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          //number-pad is a cross-platform value.
          keyboardType="number-pad"
          //Not important when input is number. But when input type is text then this would ensure that it's not auto capitalized
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
