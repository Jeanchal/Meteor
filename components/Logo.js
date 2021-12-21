import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={style.logo}>
      <Text style={style.text}>Meteor</Text>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
  },
  text: {
    margin: 15,
    paddingRight: 12,
    textAlign: "center",
    fontSize: "150%",
    width: "100%",
  },
});
