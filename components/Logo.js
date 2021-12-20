import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={style.logo}>
      <Text style={style.text}>Cervoiz</Text>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    backgroundColor: "#fff",
    width: "100%",
  },
  text: { margin: 15, textAlign: "center", fontSize: "150%" },
});
