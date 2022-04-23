import { View, StyleSheet, Dimensions } from "react-native";
import Colors from '../../constants/colors';

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
