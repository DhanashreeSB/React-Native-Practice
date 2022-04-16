import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = () => {
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
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#3b021f",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1
  }
});
