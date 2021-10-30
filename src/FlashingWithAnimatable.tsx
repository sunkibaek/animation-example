import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "orange",
  },
});

const FlashingWithAnimatable = () => {
  return (
    <Animatable.View
      animation="fadeIn"
      easing="ease-in-out"
      iterationCount="infinite"
      style={styles.container}
      useNativeDriver={true}
    />
  );
};

export default FlashingWithAnimatable;
