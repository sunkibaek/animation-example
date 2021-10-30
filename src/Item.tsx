import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  dimension: number;
  content: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    borderWidth: 1,
  },
});

const Item = ({ dimension, content }: IProps) => {
  return (
    <View style={[{ width: dimension, height: dimension }, styles.container]}>
      <Text>{content}</Text>
    </View>
  );
};

export default Item;
