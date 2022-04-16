import { Text, View, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("inside press");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        //If you want to pass multiple styles, then you can pass array of multiple styles.
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    //Overflow hidden will ensure that if any effect or any styling from inside of that container would go outside of that container, it's clipped(It's not shown).
    // So for example, if ripple effect would go outside of this container, it'll be clipped and it will not be visible.
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  //For ripple effect in iOS
  pressed: {
    //75% opaque, so 25% transparent
    opacity: 0.75,
  },
});