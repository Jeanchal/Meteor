import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import styles from "../style";

export default function About() {
  return (
    <View style={styles.page}>
      <Logo />
      <View style={style.text_container}>
        <Text style={style.title}>A propos de moi</Text>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          odit quisquam vitae quibusdam. Commodi recusandae omnis aspernatur
          eligendi odit aliquam. Aut saepe pariatur magnam ab labore amet totam
          incidunt qui.
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text_container: {
    margin: 10,
    paddingTop: 20,
    color: `#f0ffff`,
  },
  title: {
    fontSize: 22,
    color: `#f0ffff`,
    margin: 15,
  },
  text: { margin: 15 },
});
