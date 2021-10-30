import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Flashing = () => {
  return <View style={styles.container} />;
};

export default Flashing;
