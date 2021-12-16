import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function About({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.title}>A propos de moi</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odit
        quisquam vitae quibusdam. Commodi recusandae omnis aspernatur eligendi
        odit aliquam. Aut saepe pariatur magnam ab labore amet totam incidunt
        qui.
      </Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    margin: 10,
    backgroundColor: "#aaf",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default About;
