import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
  },
});

const Flashing = () => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = opacity.value = withRepeat(withSpring(1), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });

  return <Animated.View style={[styles.container, animatedStyle]} />;
};

export default Flashing;
