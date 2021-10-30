import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
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
    const interval = setInterval(() => {
      opacity.value = opacity.value === 0 ? withSpring(1) : withSpring(0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });

  return <Animated.View style={[styles.container, animatedStyle]} />;
};

export default Flashing;
