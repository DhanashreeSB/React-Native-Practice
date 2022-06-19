import { View, Alert, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { OutlineButton } from "../UI/OutlineButton";

export const LocationPicker = () => {
  const getLocationHandler = () => {};

  const pickOnMapHandler = () => {};
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate user
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlineButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
