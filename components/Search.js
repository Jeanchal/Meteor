import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Home() {
  return <TextInput style={style.input} placeholder="Météo" />;
}

const style = StyleSheet.create({
  input: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: "90%",
    height: 40,
    padding: 10,
  },
});
