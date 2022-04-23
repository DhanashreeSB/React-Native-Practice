import { Text, StyleShee } from "react-native";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    //For responsive styling
    maxWidth: "80%",
    width: 300,
  },
});
