import React from "react";
import { View } from "react-native";
import Logo from "../components/Logo";
import Search from "../components/Search";
import styles from "../style";
import data from "../data";

export default function Home() {
  return (
    <View style={styles.page}>
      <Logo />
      <Search data={data} />
    </View>
  );
}
