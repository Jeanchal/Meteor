import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Search from "../components/Search";

export default function HomeScreen() {
  return (
    <View style={style.view}>
      <Logo />
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
    backgroundColor: `#E5E5E5`,
  },
});
