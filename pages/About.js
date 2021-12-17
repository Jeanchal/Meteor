import React from "react";
import { View, Text, StyleSheet } from "react-native";

function About() {
  return (
    <View style={style.view}>
      <Text style={style.text}>A propos de moi</Text>
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
  view: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: `#0289`,
  },
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
  text: { color: `#f0ffff`, margin: 15 },
});

export default About;
