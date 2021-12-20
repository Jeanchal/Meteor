import React from "react";
import { View } from "react-native";
import Logo from "../components/Logo";
import Search from "../components/Search";
import style from "../style";

export default function HomeScreen() {
  return (
    <View style={style.home}>
      <Logo />
      <Search />
    </View>
  );
}
