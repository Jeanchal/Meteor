import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../components/Search";

export default function HomeScreen() {
  return (
    <View style={style.view}>
      <Text style={style.text}>Acceuil</Text>
      <Search />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: `#0289`,
  },
  text: { color: `#f0ffff`, margin: 15 },
});
