import { TextInput, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { useState } from "react";
import Colors from '../constants/colors'

export const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show Alert
      //Alert provided by react-native is not a component. But it's an object that holds a method that we call.
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      {/* To control the type of keyboard which pops up when user clicks on input field, there is a prop called keyboardType */}
      <TextInput
        style={styles.nameInput}
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //To add shadow to the box, we can use elevation property in React Native. Higher the laevel of Elevation, greater the shadow will be.
    //Elevation is an android only property. So, you can't add shadows with elevation in iOS.
    elevation: 8,
    //There are shadow properties in react native which will be translated to give a shadow in underlying iOS platform.
    //Thus we can give a shadow in iOS using shadow properties and elevation will have no effect in iOS.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    //Control how transparent a shadow is using shadowOpacity
    shadowOpacity: 0.25,
  },
  nameInput: {
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
