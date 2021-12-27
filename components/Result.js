import React from "react";
import { View, Text, StyleSheet } from "react-native";
import data from "../data";

console.log(data[0]);

export default function Result() {
  return (
    <View>
      <Text>{data[0]}</Text>
    </View>
  );
}
